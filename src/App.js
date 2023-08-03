import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  return <>
  {/* <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes> */}
  <Login user={{name: "Try Premium"}} />
  <Dashboard />
  </>;
}

export default App;
