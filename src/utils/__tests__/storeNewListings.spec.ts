import { storeNewListings } from '../storeNewListings'

process.env.DYNAMODB_TABLE = 'mock'

let dynamo: Array<{ id: string }> = []

jest.mock('aws-sdk', () => {
  return {
    DynamoDB: {
      DocumentClient: function testconstructor() {
        return {
          // @ts-ignore
          put: ({ Item }) => ({
            promise: () => dynamo.push(Item),
          }),
        }
      },
    },
  }
})

describe('storeNewListings', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    ;(global as any).Date = function constructor() {
      return {
        getTime: () => 'date',
      }
    }
    dynamo = []
  })

  it('should add new listing to dynamo', async () => {
    const unknownMockId1 = '1'
    const unknownMockId2 = '2'

    await storeNewListings([
      { listing_id: unknownMockId1 },
      { listing_id: unknownMockId2 },
    ])

    const dynamoItem1 = {
      createdAt: 'date',
      updatedAt: 'date',
      id: unknownMockId1,
    }

    const dynamoItem2 = {
      createdAt: 'date',
      updatedAt: 'date',
      id: unknownMockId1,
    }

    expect(dynamo).toContainEqual(dynamoItem1)
    expect(dynamo).toContainEqual(dynamoItem2)
  })

  it('should not add new listing if no listings given', async () => {
    await storeNewListings([])

    expect(dynamo).toEqual([])
  })
})
