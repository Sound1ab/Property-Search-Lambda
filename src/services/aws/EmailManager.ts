import { AWSError } from 'aws-sdk/lib/error'
import { Request } from 'aws-sdk/lib/request'
import { SES } from 'aws-sdk'

const config = {
  accessKeyId: process.env.SERVERLESS_APP_AWS_ACCESS_KEY_ID,
  apiVersion: '2010-12-01',
  region: process.env.SERVERLESS_APP_REGION,
  secretAccessKey: process.env.SERVERLESS_APP_AWS_SECRET_ACCESS_KEY,
}

const ses = new SES(config)

export class EmailManager {
  public async send(html: string) {
    const params = {
      Destination: {
        ToAddresses: ['info@phillipparker.io'],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: html,
          },
          // Text: {
          //   Charset: 'UTF-8',
          //   Data: 'This is the message body in text format.',
          // },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Test email',
        },
      },
      Source: 'phillip-parker@outlook.com',
    }

    try {
      const response = await ses.sendEmail(params).promise()
      return response
    } catch (error) {
      return null
    }
  }
}
