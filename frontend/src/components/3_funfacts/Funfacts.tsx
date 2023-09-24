import CountUp from "react-countup";
import { Container } from "react-bootstrap";
import styles from "./funfacts.module.css";

function Funfacts() {
  return (
    <>
      <section
        className={`container-fluid ${styles.container} bg-primary py-5`}
      >
        <Container className="text-center">
          <div className="mb-5">
            <h1>Some Fun Facts</h1>
          </div>
          <Container
            fluid
            className="h-100 d-flex justify-content-evenly align-items-center py-5 my-5 "
          >
            <div>
              <CountUp
                className="h1"
                useEasing={true}
                duration={120}
                enableScrollSpy
                end={1000}
              />
              <h6>Happy Customers</h6>
            </div>
            <div>
              <CountUp
                className="h1"
                duration={120}
                useEasing={true}
                enableScrollSpy
                end={1000}
              />
              <h6>Happy Customers</h6>
            </div>
            <div>
              <CountUp
                className="h1"
                duration={120}
                useEasing={true}
                enableScrollSpy
                end={1000}
              />
              <h6>Happy Customers</h6>
            </div>
          </Container>
        </Container>
      </section>
    </>
  );
}

export default Funfacts;
