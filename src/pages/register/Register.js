import React, { useState } from "react";
import { register } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Register.module.scss";

const Register = () => {
  const [userRegisterData, setuserRegisterData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [showPwt, setShowPwt] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.userReducer.isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userRegisterData));
  };

  const handleChange = (e) => {
    setuserRegisterData({
      ...userRegisterData,
      [e.target.name]: e.target.value,
    });
  };

  return isLoading ? (
    <div className={styles.spinner}>
      <Spinner animation="grow" variant="info" />
    </div>
  ) : (
    <>
      <div className={styles.login}>
        <div className={styles.login_left}>
          <h1>Welcome back</h1>
        </div>
        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          className={styles.form_wrapper}
        >
          <h1 className="mb-5">UI MASTERS</h1>
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
              {showPwt ? "Hide" : "Show"}
            </small>
            <button className="my-3" type="submit" value="Login">
              Login
            </button>
          </div>
          <div className={styles.form_bottom}>
            <p
              style={{
                color: "#f6f7f9",
                fontSize: "0.9rem",
                letterSpacing: "0.1rem",
              }}
            >
              Back to login
            </p>
            <Link
              style={{
                color: "#35bea7",
                fontSize: "0.8rem",
                fontWeight: "400",
                position: "relative",
                left: 125,
                textDecoration: "none",
                letterSpacing: "0.1rem",
              }}
              to="/login"
            >
              <span className="mr-2">Register Now</span>
              <i className="fas fa-angle-right"></i>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
