import React, { useState, useEffect } from "react";
// Router
import { Link } from "react-router-dom";
// Redux
import { login, userLoaded } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";
// Styles
import styles from "./Login.module.scss";

const Login = () => {
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const [showPwt, setShowPwt] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userLoginData));
    setIsUserLoggedIn(true);
  };

  //  useEffect(() => {
  //   if (isUserLoggedIn) {
  //     dispatch(userLoaded(userLoginData));
  //   }
  // }, []);

  const handleChange = (e) => {
    setUserLoginData({ ...userLoginData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={styles.login}>
        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          className={styles.form_wrapper}
        >
          <h1 className="mb-5">Login</h1>
          <div className={styles.inputs}>
            <input
              className="mb-3"
              name="email"
              type="email"
              placeholder="Email"
            />

            <input
              className="mb-3"
              name="password"
              type={showPwt ? "text" : "password"}
              placeholder="Password"
            />
            <small onClick={() => setShowPwt(!showPwt)}>
              {showPwt ? "Hide password" : "Show password"}
            </small>
            <button className="my-3" type="submit" value="Login">
              Login
            </button>
          </div>
          <div className={styles.form_bottom}>
            <p style={{ color: "#f6f7f9" }}>Don't have an account?</p>
            <Link style={{ color: "#face73" }} to="/register">
              Register!
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
