import React, { useState } from "react";
// Router
import { Link } from "react-router-dom";
// Redux
import { login } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";
// Styles
import styles from "./Login.module.scss";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  return (
    <>
      <div className={styles.login}>
        <form onChange={handleSubmit} className={styles.form_wrapper}>
          <h1>Login</h1>
          <input
            onChange={handleChange}
            value={email}
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={handleChange}
            value={password}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit" value="Login">
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
