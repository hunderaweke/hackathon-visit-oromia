import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <header>
      <Container fluid>
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand className={`${styles.navBrand}`}>
              <Nav.Link href="#home">Imaltuu</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav
                className={`w-100 d-flex justify-content-center  ${styles.navLink}`}
              >
                <div
                  className={`w-75  d-flex justify-content-center  ${styles.navLink}`}
                >
                  <Nav.Link className="flex-lg-item" href="#">
                    Home
                  </Nav.Link>
                  <Nav.Link className="flex-lg-item" href="#">
                    Places
                  </Nav.Link>
                  <Nav.Link className="flex-lg-item" href="#">
                    Story
                  </Nav.Link>
                  <Nav.Link className="flex-lg-item" href="#">
                    Blabla
                  </Nav.Link>
                  <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input
                      type="search"
                      className="form-control form-control-dark"
                      placeholder="Search..."
                      aria-label="Search"
                    ></input>{" "}
                  </form>{" "}
                </div>
                <div className="text-end d-flex g-2 ">
                  {" "}
                  <button
                    type="button"
                    className={`btn btn-outline-dark mx-2 ${styles.loginSignup}`}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className={`btn btn-warning mx-2 ${styles.loginSignup}`}
                  >
                    Sign-up
                  </button>
                </div>
              </Nav>
            </Navbar.Collapse>{" "}
          </Navbar>
        </Container>
      </Container>
    </header>
  );
};
