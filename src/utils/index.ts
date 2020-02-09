import { DynamoManager } from '../services'
import { TMaybeListings } from '../interfaces'

const tableName = process.env.DYNAMODB_TABLE

if (!tableName) {
  throw new Error('No tablename set')
}

const dynamoDb = new DynamoManager(tableName)

export async function findUnknownListings(listings: readonly TMaybeListings[]) {
  const readPromises = listings.map(({ listing_id }) =>
    listing_id ? dynamoDb.read(listing_id) : null
  )

  const results = await Promise.all(readPromises)

  const knownPropertyIds = results
    .filter(result => result?.Item?.id)
    .map(result => result?.Item?.id)

  return listings.filter(
    ({ listing_id }) => listing_id && !knownPropertyIds.includes(listing_id)
  )
}

export async function storeNewListings(listings: readonly TMaybeListings[]) {
  const createPromises = listings.map(({ listing_id }) =>
    listing_id ? dynamoDb.create(listing_id) : null
  )

  await Promise.all(createPromises)

  return listings
}
