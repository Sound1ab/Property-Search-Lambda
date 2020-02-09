import { DynamoManager } from '../services'
import { TMaybeListings } from '../interfaces'

export async function storeNewListings(listings: readonly TMaybeListings[]) {
  const tableName = process.env.DYNAMODB_TABLE

  if (!tableName) {
    throw new Error('No tablename set')
  }

  const dynamoDb = new DynamoManager(tableName)

  const createPromises = listings.map(({ listing_id }) =>
    listing_id ? dynamoDb.create(listing_id) : null
  )

  await Promise.all(createPromises)

  return listings
}
