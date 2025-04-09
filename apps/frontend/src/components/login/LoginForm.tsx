import React, { useState, useCallback } from "react";

interface LoginFormProps {
  onSubmit: (idStudent: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = React.memo(({ onSubmit }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!user || !password) {
        setMessage("Both fields are required");
        return;
      }
      setMessage("");
      onSubmit(user, password);
    },
    [user, password, onSubmit]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="fadeIn second"
        placeholder="Login"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        className="fadeIn third"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {message && (
        <div className="alert alert-danger">
          <strong>Error:</strong> {message}
        </div>
      )}
      <button type="submit" className="fadeIn fourth">Log In</button>
    </form>
  );
});

export default LoginForm;