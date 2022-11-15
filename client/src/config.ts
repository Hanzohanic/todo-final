// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'u29rqr0612'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-d-61bz7q.us.auth0.com',            // Auth0 domain
  clientId: '5qm4fwBjYYblK0WQ6n75oklyFptHUEIk',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
