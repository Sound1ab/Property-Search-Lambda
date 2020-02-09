import { TMaybeListings } from '../interfaces'
import { createBody } from './createBody'
import { createCard } from './createCard'

export function createEmail(listings: readonly TMaybeListings[]) {
  const NA = 'Not available'

  const cards = listings.map(listing =>
    createCard({
      address: listing?.displayable_address ?? NA,
      available: listing?.available_from_display ?? NA,
      bedrooms: listing?.num_bedrooms ?? NA,
      description: listing?.short_description ?? NA,
      floorPlan:
        listing?.floor_plan && listing.floor_plan[0]
          ? listing.floor_plan[0]
          : undefined,
      estateAgent: {
        address: listing?.agent_address ?? NA,
        tel: listing?.agent_phone ?? NA,
      },
      gmap:
        listing?.latitude && listing?.longitude
          ? `https://maps.google.com/?q=${listing.latitude},${listing.longitude}`
          : undefined,
      image: listing?.image_url ?? NA,
      price: listing?.rental_prices?.per_month
        ? `${listing.rental_prices.per_month}/month`
        : NA,
      published: listing?.first_published_date
        ? new Date(listing.first_published_date).toDateString()
        : NA,
      zoopla: listing?.details_url ?? NA,
    })
  )

  return createBody(cards)
}
