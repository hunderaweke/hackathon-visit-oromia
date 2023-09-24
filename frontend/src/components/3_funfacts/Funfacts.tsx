import CountUp from "react-countup";
import { Container } from "react-bootstrap";
function Funfacts() {
  return (
    <>
      <section className="container-fluid">
        <Container className="text-center">
          <h1>Some Fun Facts</h1>
          <Container fluid className="d-flex justify-content-evenly py-5 my-5 ">
            <div>
              <CountUp className="h1" end={1000} />
              <h6>Happy Customers</h6>
            </div>
            <div>
              <CountUp className="h1" end={1000} />
              <h6>Happy Customers</h6>
            </div>
            <div>
              <CountUp className="h1" end={1000} />
              <h6>Happy Customers</h6>
            </div>  
          </Container>
        </Container>
      </section>
    </>
  );
}

export default Funfacts;
