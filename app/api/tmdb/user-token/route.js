export async function TmdbAccount(type) {
  try {
    if (type === 'user') {
      const tokenObject = await GetNewUserToken()
      const tokenCode = await tokenObject.request_token
      await UserSession(tokenCode)
    } else {
      await GuestSession()
    }
  } catch (error) {
    console.error("Couldn't register new user! Error: ", error)
  }
}
// GET TMDB TOKEN TO CONNECT USER DATA FROM TMDB TO FILMSTUND
async function GetNewUserToken() {
  const apiKey = process.env.TMDB_API_KEY
  const URL = 'https://api.themoviedb.org/3/authentication/token/new'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }
  try {
    const response = await fetch(URL, options)
    const json = await response.json()
    return json
  } catch (error) {
    console.error("Couldn't create new Request Token! Error: ", error)
  }
}

// CREATE A NEW VALID USER SESSION WICH RETURNS Object{ {sucess: bool }, {session_id: string }}
async function UserSession(reqToken) {
  const apiKey = process.env.TMDB_API_KEY
  const URL = 'https://api.themoviedb.org/3/authentication/session/new'
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: {
      request_token: reqToken,
    },
  }
  try {
    const response = await fetch(URL, options)
    const json = await response.json()
    return json
  } catch (error) {
    console.error("Couldn't create new User Session! Error: ", error)
  }
}

// CREATE A GUEST SESSION WICH RETURNS Object{ {sucess: bool }, {guest_session_id: string }, {expires_at: string}}
async function GuestSession() {
  const apiKey = process.env.TMDB_API_KEY
  const URL = 'https://api.themoviedb.org/3/authentication/guest_session/new'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }
  try {
    const response = await fetch(URL, options)
    const json = await response.json()
    return json
  } catch (error) {
    console.error("Couldn't create new Guest Session! Error: ", error)
  }
}
