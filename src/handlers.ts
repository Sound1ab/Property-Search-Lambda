import { APIGatewayProxyHandler } from 'aws-lambda'

export const hello: APIGatewayProxyHandler = async event => {
  return {
    body: JSON.stringify(
      {
        input: event,
        message: 'API is up and running!',
      },
      null,
      2
    ),
    statusCode: 200,
  }
}
