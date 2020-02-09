import { TMaybeListings } from '../interfaces'
import axios from 'axios'

export async function getPropertylistings() {
  const postcode = process.env.SERVERLESS_APP_POSTCODE
  const apiKey = process.env.SERVERLESS_APP_ZOOPLA_API_KEY
  const radius = 2
  const orderBy = 'age'
  const ordering = 'descending'
  const listingStatus = 'rent'
  const minimumPrice = '325'
  const maximumPrice = '400'
  const minimumBeds = 1
  const maximumBeds = 2
  const pageSize = 15
  const summarised = 'no'

  const url = `https://api.zoopla.co.uk/api/v1/property_listings.json?postcode=${postcode}&api_key=${apiKey}&radius=${radius}&order_by=${orderBy}&ordering=${ordering}&listing_status=${listingStatus}&minimum_price=${minimumPrice}&maximum_price=${maximumPrice}&minimum_beds=${minimumBeds}&maximum_beds=${maximumBeds}&page_size=${pageSize}summarised=${summarised}`

  const { status, statusText, data } = await axios.get(url)

  if (status !== 200 || statusText !== 'OK' || !data?.listing) {
    throw new Error('Zoopla api failed')
  }

  return data.listing as readonly TMaybeListings[]
}
