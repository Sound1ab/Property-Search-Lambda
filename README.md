# Property-Search-Lambda

## What does it do?

- Finds properties using property listing apis to filter that fit a specific critera
- When the properties are found, estate agents are automatically emailed to arrange a viewing and details added to a google sheets spreadsheet

## Critera

- Less than 1600/month
- More than 1300/month
- Has two or less bedrooms
- Within communting distance of london fields
- Added within the last day

### Nice to haves but not necessary

- Garden
- Bike storage
- Floorplan

## Dependencies

- Zoopla api
- AWS Lambda
- AWS SNS (for email)
- Google sheet api
- Email Templating with MJML

## Zoopla

Documentation: https://developer.zoopla.co.uk/docs

Property listing: https://developer.zoopla.co.uk/docs/read/Property_listings

Example request: GET https://api.zoopla.co.uk/api/v1/property_listings.json?postcode=n14pu&api_key=***&radius=1&order_by=age&ordering=descending&listing_status=rent&minimum_price=325&maximum_price=400&minimum_beds=1&maximum_beds=2&summarised=yes

Arrange viewing: https://developer.zoopla.co.uk/docs/read/Arrange_Viewing

GET session id: https://api.zoopla.co.uk/api/v1/get_session_id.js?api_key=***

## AWS SES

Amazon simple email service.

Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html

Sending an email: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#sendEmail-property

## MJML email templating

install: `yarn add mjml`

Generate HTMl:

```javascript
import mjml2html from 'mjml'

/*
  Compile an mjml string
*/
const htmlOutput = mjml2html(
  `
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text>
            Hello World!
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
`,
  options
)

/*
  Print the responsive HTML generated and MJML errors if any
*/
console.log(htmlOutput)
```

Documentation: https://mjml.io/documentation/#usage
