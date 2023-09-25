import { Container } from "react-bootstrap";
import styles from "./hotelprofile.module.css";
export const HotelProfile = () => {
  return (
    <>
      <main className={``}>
        <div className={`${styles.mainPicture}`}></div>
        <Container className={`d-flex my-5 justify-content-center `}>
          <div className={`mx-5 ${styles.profilePicture}`}>
            <img src="" alt="" />
          </div>
          <div
            className={`d-flex flex-column mt-5 text-center justify-content-center `}
          >
            <h4>User Name</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="#">@xyz</a>
          </div>
        </Container>
        <Container className={`text-center my-5 d-flex flex-column`}>
          <div>
            <h1>Stories</h1>
          </div>
          <Container className={`d-lg-flex justify-content-evenly py-5`}>
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
              <div className={`  ${styles.storyCard}`}></div>
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
