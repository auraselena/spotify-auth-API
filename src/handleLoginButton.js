import { redirectToAuthCodeFlow } from "./spotifyAuth";

const handleLoginButton = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  redirectToAuthCodeFlow(clientId);
};

export { handleLoginButton };
