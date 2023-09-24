import CountUp from "react-countup";
import { Container } from "react-bootstrap";
import styles from "./funfacts.module.css";

function Funfacts() {
  return (
    <>
      <section
        className={`container-fluid ${styles.container} d-flex align-items-center py-5 my-3`}
      >
        <Container className="text-center">
          <div className="mb-5">
            <h1 className="text-light">Some Fun Facts</h1>
          </div>
          <Container
            fluid
            className="h-100 d-flex justify-content-evenly align-items-center py-5 my-5 "
          >
            <div>
              <CountUp
                className="h1 text-light"
                useEasing={true}
                duration={20}
                enableScrollSpy
                end={1000}
              />
              <h6 className="text-light">Happy Tourists</h6>
            </div>
            <div>
              <CountUp
                className="h1 text-light"
                duration={20}
                useEasing={true}
                enableScrollSpy
                end={1000}
              />
              <h6 className="text-light">Tourist Destination</h6>
            </div>
            <div>
              <CountUp
                className="h1 text-light"
                duration={20}
                useEasing={true}
                enableScrollSpy
                end={1000}
              />
              <h6 className="text-light">Hotels</h6>
            </div>
          </Container>
        </Container>
      </section>
    </>
  );
}

export default Funfacts;
