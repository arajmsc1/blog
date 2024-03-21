import {OAuth2Client} from 'google-auth-library'
//get runtime config variables
const config=useRuntimeConfig();
//create google client id
const googleClientID=config.googleClientID
const client = new OAuth2Client();

//API event handler
  export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const token=body.token
    if(!token)
    {
      throw createError({
        statusCode:'400',
        statusMessage:'No Token / Invalid Token Provided'
      })
     
    }
    const user=verify(token).catch(console.error);
    return user;
    // return {
    //   token: body.token,
    // };
  });





async function verify(token:string) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: googleClientID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  return payload
  //const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}

  