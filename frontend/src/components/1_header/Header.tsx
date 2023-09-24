import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from "./header.module.css";
export const Header = () => {

  const navigation = useNavigate();

  return (
    <header>
      <Container fluid>
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand className={`${styles.navBrand}`}>
              <Nav.Link href="/">Imaltuu</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav
                className={`w-100 d-flex justify-content-center  ${styles.navLink}`}
              >
                <div
                  className={`w-75  d-flex justify-content-center  ${styles.navLink}`}
                >
                  <Nav.Link className="flex-lg-item" href="/">
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
                    onClick={() => {
                      navigation("/login");
                    }}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className={`btn btn-warning mx-2 ${styles.loginSignup}`}
                    onClick={() => {
                      navigation("/signup");
                    }}
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

// function DemoNavbar()=>{
//   return
//   <header className="p-3 bg-dark text-white">
//     <div className="container">
//       <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//         <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
//           <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
//         </a>

//         <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//           <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
//           <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
//           <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
//           <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
//           <li><a href="#" className="nav-link px-2 text-white">About</a></li>
//         </ul>

//         <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
//           <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search">
//         </form>

//         <div className="text-end">
//           <button type="button" className="btn btn-outline-light me-2">Login</button>
//           <button type="button" className="btn btn-warning">Sign-up</button>
//         </div>
//       </div>
//     </div>
//   </header>;
// }
