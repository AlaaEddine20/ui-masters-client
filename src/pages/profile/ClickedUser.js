import axios from "axios";
import React, { useState, useEffect } from "react";
import avatar from "./avatar.png";
import styles from "./Style.module.scss";
import { useParams, useHistory } from "react-router-dom";

const ClickedUser = () => {
  const [currentUser, setCurrentUser] = useState(false);

  const params = useParams();
  const history = useHistory();

  const fetchCurrentUser = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.get(
        `${process.env.REACT_APP_URL}/users/${params.id}`,
        config
      );

      setCurrentUser(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      history.push("/discover");
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, [params]);

  return (
    <div className={styles.profile_container}>
      {currentUser && (
        <div className={styles.current_wrapper_profile}>
          <div className={styles.current_profile_pic}>
            {currentUser.profilePic ? (
              <>
                <img src={currentUser.profilePic} alt="profile-pic" />
              </>
            ) : (
              <img src={avatar} alt="profile-pic" />
            )}
          </div>
          <div className={styles.user_info}>
            <h2 className="ml-3" style={{ color: "#8739f9" }}>
              {currentUser.name}
              <span> {currentUser.lastname}</span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClickedUser;
