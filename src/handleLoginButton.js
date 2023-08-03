import { generateRandomString, generateCodeChallenge, getProfile } from "./spotifyAuth";

const handleLoginButton = () => {
  let codeVerifier = generateRandomString(43);

  generateCodeChallenge(codeVerifier)
    .then((codeChallenge) => {
      // console.log("codeChallenge: ", codeChallenge);

      const clientId = process.env.REACT_APP_CLIENT_ID;
      const redirectUri = "http://localhost:3000";
      let state = generateRandomString(16);
      let scope = "playlist-modify-private";

      localStorage.setItem("code_verifier", codeVerifier);

      let args = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
      });

      window.location = "https://accounts.spotify.com/authorize?" + args;
    })
    .catch((error) => {
      console.error("error: ", error.message);
    });

  // get the code after the user accepts the authorization request
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get("code");


  if (code) {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = "http://localhost:3000";
    const codeVerifier = localStorage.getItem("code_verifier");

    // make a POST request using fetch method from browser
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri,
        client_id: clientId,
        code_verifier: codeVerifier,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    getProfile();
  }

  return null;
};

export { handleLoginButton };
