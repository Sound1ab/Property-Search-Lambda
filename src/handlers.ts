import { findUnknownListings, storeNewListings } from './utils'

import { APIGatewayProxyHandler } from 'aws-lambda'
import { EmailManager } from './services/aws/EmailManager'
import { createBlank } from './mjml'
import { createEmail } from './mjml/createEmail'
import { getPropertylistings } from './api'
import mjml2html from 'mjml'

const emailManager = new EmailManager()

export const hello: APIGatewayProxyHandler = async () => {
  const listings = await getPropertylistings()

  const unknownListings = await findUnknownListings(listings)

  await storeNewListings(unknownListings)

  const emailTemplate =
    unknownListings.length === 0 ? createBlank() : createEmail(unknownListings)

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
