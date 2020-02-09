export interface IRentalPrices {
  shared_occupancy: string
  per_week: number
  accurate: string
  per_month: number
}

export interface IListings {
  rental_prices: IRentalPrices
  country_code: string
  num_floors: string
  image_150_113_url: string
  listing_status: string
  num_bedrooms: string
  location_is_approximate: number
  image_50_38_url: string
  latitude: number
  furnished_state: string
  agent_address: string
  category: string
  property_type: string
  letting_fees: string
  longitude: number
  thumbnail_url: string
  description: string
  post_town: string
  details_url: string
  outcode: string
  image_645_430_url: string
  county: string
  price: string
  available_from_display: string
  listing_id: string
  image_caption: string
  image_80_60_url: string
  status: string
  agent_name: string
  num_recepts: string
  country: string
  first_published_date: string
  displayable_address: string
  street_name: string
  num_bathrooms: string
  agent_logo: string
  agent_phone: string
  image_354_255_url: string
  image_url: string
  last_published_date: string
}

export type TMaybeListings = Partial<IListings>
