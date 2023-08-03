// import { Link } from "react-router-dom";

// const ButtonLogin = () => {
//   var client_id = process.env.CLIENT_ID;
//   var redirect_uri = "http://localhost:8888/callback";

//   var state = generateRandomString(16);

//   localStorage.setItem(stateKey, state);
//   var scope = "playlist-modify-private";

//   var url = "https://accounts.spotify.com/authorize";
//   url += "?response_type=token";
//   url += "&client_id=" + encodeURIComponent(client_id);
//   url += "&scope=" + encodeURIComponent(scope);
//   url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
//   url += "&state=" + encodeURIComponent(state);

//   return (
//     <>
//       <Link to={`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=http://localhost:3000&scope=playlist-modify-private`}>Login</Link>
//       <button
//         onClick={() => {
//           const codeVerifier = generateRandomString(128); // Generate a random string with high entropy
//           const codeChallenge = base64UrlEncode(sha256(codeVerifier)); // Encode the SHA256 hash of the code verifier and then base64 URL encode it
//           window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://localhost:3000&code_challenge_method=S256&code_challenge=${codeChallenge}&scope=playlist-modify-private`;
//         }}
//       >
//         Login lagi
//       </button>
//     </>
//   );
// };

// export default ButtonLogin;
