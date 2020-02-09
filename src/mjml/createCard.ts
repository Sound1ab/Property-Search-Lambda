interface ICreateCard {
  available: string
  price: string
  address: string
  description: string
  bedrooms: string
  zoopla: string
  gmap?: string
  floorPlan?: string
  image: string
  estateAgent: {
    address: string
    tel: string
  }
  published: string
}

export function createCard({
  address,
  available,
  description,
  estateAgent,
  bedrooms,
  gmap,
  image,
  price,
  published,
  zoopla,
  floorPlan,
}: ICreateCard) {
  return `<mj-wrapper>
      <mj-section background-color="white" padding="0">
        <mj-column>
          <mj-text line-height="1.5">
            <h3>
              ${address}
            </h3>
            <h4>
              ${price}
            </h4>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section background-color="white" padding="0">
        <mj-column>
          <mj-image padding="0" src="${image}" />
        </mj-column>
        <mj-column>
          <mj-image padding="0" src="${floorPlan}" />
        </mj-column>
      </mj-section>
      <mj-section background-color="white" padding="0">
        <mj-column>
          <mj-text line-height="1.5">
            <h3>
              ${available}
            </h3>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section background-color="white" padding="0">
        <mj-column>
          <mj-text line-height="1.5">${description}</mj-text>
        </mj-column>
      </mj-section>
      <mj-section background-color="white" padding="0">
        <mj-column>
          <mj-text line-height="1.5">
            <h4>
              Estate agent
            </h4>
            <p>${estateAgent.address}</p>
            <p>${estateAgent.tel}</p>
          </mj-text>
        </mj-column>
        <mj-column>
          <mj-text>
            <h4>
              Bedrooms
            </h4>
            <p>${bedrooms}</p>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section background-color="white" padding="0">
        <mj-column>
          <mj-button background-color="#2DDCB4" border-radius="8px" href="${zoopla}" font-size="14px" font-family="Helvetica,Arial,sans-serif" line-height="120%">View on Zoopla</mj-button>
        </mj-column>
        ${
          gmap
            ? `<mj-column>
          <mj-button background-color="#2DDCB4" border-radius="8px" href="${gmap}" font-size="14px" font-family="Helvetica,Arial,sans-serif" line-height="120%">View in Google Maps</mj-button>
        </mj-column>`
            : ''
        }
      </mj-section>
      <mj-section background-color="white" padding="0">
        <mj-column>
          <mj-text align="right">
            <h5>
              ${published}
            </h5>
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-wrapper>`
}
