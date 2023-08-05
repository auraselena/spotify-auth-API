import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { getAccessToken, fetchProfile } from "./spotifyAuth";

const clientId = process.env.REACT_APP_CLIENT_ID;
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (code) {
  const getTokenAndProfile = async () => {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    console.log("profile", profile);
  };
  getTokenAndProfile();
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
