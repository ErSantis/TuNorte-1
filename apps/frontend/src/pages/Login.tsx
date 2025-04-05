import "../styles/Login.css";
import LoginForm from "../components/LoginForm";
import { useLoginUser } from "../hooks/useLoginUser";

const Login = () => {
  const { mutate: login } = useLoginUser();

  const handleLogin = (user: string, password: string) => {
    login({ user, password });
  };

  return (
    // Fondo
    <div className="wrapper">
      <div className="formContent">
        <h2 className="active">Sign In</h2>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default Login;