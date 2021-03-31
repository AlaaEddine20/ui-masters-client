import React, { useState } from "react";
import { Badge } from "react-bootstrap";
// redux
import { useSelector, useDispatch } from "react-redux";
import { uploadProfilePic } from "./../../redux/actions/userActions";
import avatar from "./avatar.png";
// styles
import LoadingBar from "./LoadingBar";
import styles from "./Profile.module.scss";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const isLoading = useSelector((state) => state.userReducer.isLoading);
  const dispatch = useDispatch();

  const [image, setImage] = useState("");

  const id = user._id;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadProfilePic(id, image));
  };

  const removeImage = () => {
    setImage({ image: null });
  };

  return (
    <div className={styles.profile_container}>
      <div className={styles.wrapper_profile}>
        <div className={styles.profile_pic}>
          {user.profilePic ? (
            <>
              <Badge
                onClick={removeImage}
                className={styles.badge}
                variant="danger"
              >
                Remove
              </Badge>

              <img src={user.profilePic} alt="profile-pic" />
            </>
          ) : (
            <img src={avatar} alt="profile-pic" />
          )}

          {isLoading ? <LoadingBar /> : null}
          <div className={styles.form}>
            <form
              className="mt-3"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <input
                type="file"
                accept="image/"
                id="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <label htmlFor="file">Choose file</label>
              <input className={styles.inputs} type="submit" value="Save" />
            </form>
          </div>
        </div>
        <div className={styles.username}>
          <h2 className="ml-3" style={{ color: "#8739f9" }}>
            {user.name}
            <span> {user.lastname}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
