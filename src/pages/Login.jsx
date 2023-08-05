import ButtonLogin from "../components/ButtonLogin";

const Login = () => {
  return (
    <>
      <h1 style={{ color: "white" }}>Login page</h1>
      <ButtonLogin user={{ name: "Login to Soundify" }} />
    </>
  );
};

export default Login;
