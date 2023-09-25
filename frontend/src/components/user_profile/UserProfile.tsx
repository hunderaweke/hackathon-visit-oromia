import { Container } from "react-bootstrap";
import styles from "./userprofile.module.css";
export const UserProfile = () => {
  return (
    <>
      <main className={`py-5`}>
        <Container className={`d-flex justify-content-evenly `}>
          <div className={`mx-5 ${styles.profilePicture}`}>
            <img src="" alt="" />
          </div>
          <div className={`d-flex flex-column justify-content-center `}>
            <h4>User Name</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="#">@xyz</a>
          </div>
          <div
            className={`d-flex flex-column justify-content-center justify-content-evenly `}
          >
            <button className={`btn btn-outline-dark`}>Edit Profile</button>
            <button className={`btn btn-outline-dark `}>Add Story</button>
          </div>
        </Container>
        <Container className={`text-center my-5 d-flex flex-column`}>
          <div>
            <h1>Stories</h1>
          </div>
          <Container className={`d-flex justify-content-evenly py-5`}>
            <link>
              <div className={`${styles.storyCard}`}></div>
            </link>
            <link>
              <div className={`${styles.storyCard}`}></div>
            </link>
            <link>
              <div className={`${styles.storyCard}`}></div>
            </link>
          </Container>
        </Container>
        <Container>
          <div className={`text-center`}>
            <h1>Visited Sites</h1>
          </div>
          <Container className={`d-flex justify-content-evenly py-5`}>
            <link>
              <div className={`${styles.storyCard}`}></div>
            </link>
            <link>
              <div className={`${styles.storyCard}`}></div>
            </link>
            <link>
              <div className={`${styles.storyCard}`}></div>
            </link>
          </Container>
        </Container>
      </main>
    </>
  );
};
