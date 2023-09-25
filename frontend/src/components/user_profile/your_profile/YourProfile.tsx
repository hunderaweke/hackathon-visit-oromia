import styles from "./Profile.module.css";

import profile_img from "../../../assets/person/person_1.jpg"

const YourProfile = () => {
  return (
    <div className="d-flex flex-wrap ">
      <div className="col-12 col-md-8">
        <ul>
          <li>
            Name: <span className={`${styles.abc}`}>Kiya Kebe</span>
          </li>
          <li>
            Username: <span className={`${styles.abc}`}>Kiya Kebe</span>
          </li>
          <li>
            Personal Note: <span className={`${styles.abc}`}>Kiya Kebe</span>
          </li>
        </ul>
      </div>
      <div className="col-12 col-md-4">
        <img
          src={profile_img}
          alt="Your Profile Image"
          width={"100%"}
          className={`${styles.profile_img}`}
        />
      </div>
    </div>
  );
};

export default YourProfile;
