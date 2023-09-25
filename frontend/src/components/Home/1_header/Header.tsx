import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import {useEffect,useState} from 'react';
import axios from "axios";
import styles from "./header.module.css";
export const Header = () => {
  const navigation = useNavigate();
  const [userData,setUserData] = useState(null);
  const [logggedIn,setLoggedIn] = useState(false);
  const token = localStorage.getItem('access')
  useEffect(()=>{
    try{
      axios.get('http://192.168.60.185:5000/accounts/visitor_profile/',{headers:{
        Authorization:`Bearer ${token}`
      }})
      .then((res)=>{
        setUserData(res.data)
        setLoggedIn(true)
      })
    }
    catch(error){
      console.log(error)
    }
  },[])
  return (
    <header className={`${styles.header} py-lg-2 fixed-top z-2 bg-light`}>
      <Container fluid>
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand className={`${styles.navBrand}`}>
              <Nav.Link href="/">Imaltuu</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav
                className={`w-100 d-flex justify-content-between  ${styles.navLink}`}
              >
                <div
                  className={`w-lg-75  d-lg-flex justify-content-lg-center mx-lg-auto   ${styles.navLink}`}
                >
                  <Nav.Link className="flex-lg-item" href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link className="flex-item" href="/places">
                    Places
                  </Nav.Link>
                  <Nav.Link className="flex-item" href="#">
                    Story
                  </Nav.Link>
                  <Nav.Link className="flex-item" href="#">
                    Blabla
                  </Nav.Link>
                  <form className="col-12 flex-item col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input
                      type="search"
                      className="form-control form-control-dark"
                      placeholder="Search..."
                      aria-label="Search"
                    ></input>{" "}
                  </form>{" "}
                </div>
               { logggedIn ? <button onClick={()=>{
                navigation('/user')
               }}>
                <img src={userData && userData?.profile.profile_pictures} alt="" />
                <p>{userData.user.email}</p>
               </button>:
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
                </div>}
              </Nav>
            </Navbar.Collapse>{" "}
          </Navbar>
        </Container>
      </Container>
    </header>
  );
};
