import { findUnknownListings, storeNewListings } from './utils'

import { APIGatewayProxyHandler } from 'aws-lambda'
import { EmailManager } from './services/aws/EmailManager'
import { createEmail } from './mjml/createEmail'
import { getPropertylistings } from './api'
import mjml2html from 'mjml'

const emailManager = new EmailManager()

export const hello: APIGatewayProxyHandler = async () => {
  try {
    const listings = await getPropertylistings()

    const unknownListings = await findUnknownListings(listings)

    await storeNewListings(unknownListings)

    if (unknownListings.length === 0) {
      throw new Error('No new listings')
    }

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
  } catch(err) {
    return {
      body: err.message,
      statusCode: 200,
    }
  }
}
