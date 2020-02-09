import { DynamoManager } from '../services'
import { TMaybeListings } from '../interfaces'

export async function findUnknownListings(listings: readonly TMaybeListings[]) {
  const tableName = process.env.DYNAMODB_TABLE

  if (!tableName) {
    throw new Error('No tablename set')
  }

  const dynamoDb = new DynamoManager(tableName)

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
