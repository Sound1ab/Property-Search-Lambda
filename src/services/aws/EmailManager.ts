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
        ToAddresses: [
          process.env.SERVERLESS_APP_TO_PRIMARY!,
        ],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: html,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: "Phill's Flat Club",
        },
      },
      Source: process.env.SERVERLESS_APP_SOURCE!,
    }

    return await ses.sendEmail(params).promise()
  }
}
