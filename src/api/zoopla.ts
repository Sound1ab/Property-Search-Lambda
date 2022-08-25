import { TMaybeListings } from '../interfaces'
import axios from 'axios'

export async function getPropertylistings() {
  const postcode = process.env.SERVERLESS_APP_POSTCODE
  const apiKey = process.env.SERVERLESS_APP_ZOOPLA_API_KEY
  const radius = 5
  const orderBy = 'age'
  const ordering = 'descending'
  const listingStatus = 'sale'
  const minimumPrice = '300000'
  const maximumPrice = '400000'
  const minimumBeds = 0
  const maximumBeds = 2
  const pageSize = 100
  const summarised = 'no'

  const url = `https://api.zoopla.co.uk/api/v1/property_listings.json?postcode=${postcode}&api_key=${apiKey}&radius=${radius}&order_by=${orderBy}&ordering=${ordering}&listing_status=${listingStatus}&minimum_price=${minimumPrice}&maximum_price=${maximumPrice}&minimum_beds=${minimumBeds}&maximum_beds=${maximumBeds}&page_size=${pageSize}&summarised=${summarised}&keywords=mezzanine`
  
  const { status, statusText, data } = await axios.get(url)

  if (status !== 200 || statusText !== 'OK' || !data?.listing) {
    throw new Error('Zoopla api failed')
  }

  return data.listing as readonly TMaybeListings[]
}
