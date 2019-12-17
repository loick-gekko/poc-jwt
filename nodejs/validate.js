
const jwt = require('jsonwebtoken')

const jwtKey = 'Xz05Z1JmP2'

  // Premier token generer avec la key simple, 2eme avec le .getBytes(utf-8) sur la clé : 
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsb2ljayIsInRlc3QiOiIxIn0.dB8YTun8t6v5AA7v6X1-jqwZ_pie_4mWqxTA88rSF1D_3MxQAM5TROtLXa4Am0CZ2g7q9LEQd1bnPiNdnh6FeA'
  const token2 = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsb2ljayIsInRlc3QiOiIxIn0.Vzcp2OrJvodYBLT6L4k8ZzYvzv-6Ts5m_jobPSvodCz38pHlX-gyXK4OJw9VViDApXPAPvTcoSaoUeYUUW81LA'

  var payload
  try {
    payload = jwt.verify(token, jwtKey)
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      // if the error thrown is because the JWT is unauthorized, return a 401 error
      console.log( e)
    }
    // otherwise, return a bad request error
    console.log( e)
  }

  // Finally, return the welcome message to the user, along with their
  // username given in the token
  console.log(`Bonjour ${payload.sub}!`)
