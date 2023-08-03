import { handleLoginButton } from "./handleLoginButton";

const Login = (props) => {
  let data = localStorage.getItem("data");
  if (data) {
    data = JSON.parse(data);
    console.log("data", data);
    return <div style={{ color: "white" }}>Hi, {data.display_name}</div>;
  } else {
    return (
      <button onClick={handleLoginButton} className="button-login">
        {props.user.name}
      </button>
    );
  }
};

export default Login;
