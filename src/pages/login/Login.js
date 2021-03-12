import React, { useState } from "react";
// Router
import { Link } from "react-router-dom";
// Redux
import { login } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";
// Styles
import styles from "./Login.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(login(userData));
  };

  return (
    <>
      <div className={styles.login}>
        <form className={styles.form_wrapper}>
          <h1>Login</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
          <button onClick={handleSubmit} type="submit" value="Login">
            Login
          </button>
          <div>
            Don't have an account?
            <Link to="/register">
              <span style={{ color: "#fff" }}>Register!</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
