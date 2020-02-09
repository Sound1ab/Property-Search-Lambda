import { findUnknownListings } from '../findUnknownListings'

process.env.DYNAMODB_TABLE = 'mock'

jest.mock('aws-sdk', () => {
  return {
    DynamoDB: {
      DocumentClient: function testconstructor() {
        return {
          // @ts-ignore
          get: ({ Key: { id } }) => ({
            promise: () =>
              ['1', '2'].includes(id) ? Promise.resolve({ Item: { id } }) : {},
          }),
        }
      },
    },
  }
})

describe('findUnknownListings', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('previously unknown listings given', () => {
    it('should return unknown listings', async () => {
      const knownMockId = '1'
      const unknownMockId = '61466809'

      const [{ listing_id }] = await findUnknownListings([
        { listing_id: knownMockId },
        { listing_id: unknownMockId },
      ])

      expect(listing_id).toEqual(unknownMockId)
    })

    it('should return unknown listings', async () => {
      const unknownMockId1 = '3'
      const unknownMockId2 = '4'

      const result = await findUnknownListings([
        { listing_id: unknownMockId1 },
        { listing_id: unknownMockId2 },
      ])

      expect(result[0].listing_id).toEqual(unknownMockId1)
      expect(result[1].listing_id).toEqual(unknownMockId2)
    })
  })

  describe('no previously unknown listings given', () => {
    it('should return an empty array', async () => {
      const knownMockId1 = '1'
      const knownMockId2 = '2'

      const result = await findUnknownListings([
        { listing_id: knownMockId1 },
        { listing_id: knownMockId2 },
      ])

      expect(result).toEqual([])
    })
  })
})
