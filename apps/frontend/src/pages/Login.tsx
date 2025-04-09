import "../styles/Login.css";
import LoginForm from "../components/login/LoginForm";
import { useLoginUser } from "../hooks/useLoginUser";

const Login:  React.FC = () => {
  const { mutate: login } = useLoginUser();

  const handleLogin = (username: string, password: string) => {
    login({ username, password });
  };

  return (
    <div className="wrapper">
      <div className="formContent">
        <h2 className="active">Sign In</h2>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};
export default Login;
