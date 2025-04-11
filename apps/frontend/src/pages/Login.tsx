import "../styles/Login.css";
import LoginForm from "../components/login/LoginForm";
import { useLoginUser } from "../hooks/useUser";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Login: React.FC = React.memo(() => {

  const navigate = useNavigate();
  const {mutate: loginMutation } = useLoginUser();
  const {login :loginUser} = useAuth()
  const handleLogin = (username: string, password: string) => {
    loginMutation(
      { username, password },
      {
        onSuccess: (data) => {
          // Call the login function from AuthContext, save it in the context
          loginUser(data);
          // Redirect to another page on success
          navigate("/home");
        },
        onError: (error) => {
          // Set error message to display CustomAlert
            toast.error(`🚨 ${error.message}`, {
            position: "top-center",
            autoClose: 4000,
            closeOnClick: false,
            closeButton: false,
            });
        },
      }
    );
  };
  return (
    <div className="wrapper">
      <div className="formContent">
        <h2 className="active">Sign In</h2>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
});
export default Login;
