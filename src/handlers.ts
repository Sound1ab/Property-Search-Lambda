import { findUnknownListings, storeNewListings } from './utils'

import { APIGatewayProxyHandler } from 'aws-lambda'
import { EmailManager } from './services/aws/EmailManager'
import { createEmail } from './mjml/createEmail'
import { getPropertylistings } from './api'
import mjml2html from 'mjml'

const emailManager = new EmailManager()

export const hello: APIGatewayProxyHandler = async event => {
  const listings = await getPropertylistings()

  const unknownListings = await findUnknownListings(listings)

  if (unknownListings.length === 0) {
    return {
      body: 'No new listings',
      statusCode: 200,
    }
  }

  await storeNewListings(unknownListings)

  const emailTemplate = createEmail(unknownListings)

  const htmlOutput = mjml2html(emailTemplate, {
    minify: true,
    validationLevel: 'skip',
  })

  const response = await emailManager.send(htmlOutput.html)

  return {
    body: JSON.stringify(
      {
        response,
      },
      null,
      2
    ),
    statusCode: 200,
  }
}
