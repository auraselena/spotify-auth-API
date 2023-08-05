import { handleLoginButton } from "../handleLoginButton";

const ButtonLogin = (props) => {
    return (
      <button onClick={handleLoginButton} className="button-login">
        {props.user.name}
      </button>
    );
};

export default ButtonLogin;
