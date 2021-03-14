import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "../../components/sidebar/SideBar";
import { userLoaded } from "../../redux/actions/authAction";
import styles from "./Home.module.scss";

const Home = () => {
  const user = useSelector((state) => state.authReducer.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoaded());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.home_right}></div>
    </div>
  );
};

export default Home;
