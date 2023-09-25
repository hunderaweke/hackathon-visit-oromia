import styles from "./Profile.module.css";

import profile_img from "../../../assets/person/person_1.jpg";

const YourProfile = () => {
  return (
    <div className="d-flex flex-wrap ">
      <div className="col-12 col-md-8">
        <ul>
          <li className="fs-5 list-unstyled my-4">
            Name: <span className={`${styles.abc}`}>Kiya Kebe</span>
          </li>
          <li className="fs-5 list-unstyled my-4">
            Username:{" "}
            <span className={`${styles.abc}`}>kiyakebe@gmail.com</span>
          </li>
          <li className="fs-5 list-unstyled my-4">
            Personal Descroiption: <br />
            <span className={`${styles.abc} fs-6`}>
              " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              voluptates similique possimus. Soluta sapiente magnam repellat
              sunt quia mollitia maiores. "
            </span>
          </li>
          <li className="fs-5 list-unstyled my-4">
            Your Stories:{" "}
            <span className={`${styles.abc} ${styles.circle_story}`}>14</span>
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
