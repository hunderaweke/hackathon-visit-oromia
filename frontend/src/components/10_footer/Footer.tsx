import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className={`bg-dark`}>
        <div className="container-fluid bg-light-s py-5">
          <div className="container-md">
            <div className="row">
              <div className="col-12 col-md-3 my-3">
                <p className="fs-7 my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  repudiandae id nesciunt molestias assumenda maxime vitae iste
                  hic, adipisci animi quidem.
                </p>
              </div>
              <div className="col-12 col-md-2">
                <ul className="list-unstyled my-3">
                  <li className="my-3">
                    <b>Resources</b>
                  </li>
                  <li>News</li>
                  <li>Pricing</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="col-12 col-md-2">
                <ul className="list-unstyled my-3">
                  <li className="my-3">
                    <b>Services</b>
                  </li>
                  <li>Roof Replacement</li>
                  <li>Roof Repair</li>
                  <li>Roof Maintenance</li>
                </ul>
              </div>
              <div className="col-12 col-md-2">
                <ul className="list-unstyled my-3">
                  <li className="my-3">
                    <b>Company</b>
                  </li>
                  <li>About Us</li>
                  <li>Our CEO</li>
                  <li>Terms and Conditions</li>
                </ul>
              </div>
              <div className="col-12 col-md-3">
                <ul className="list-unstyled my-3">
                  <li className="my-3">
                    <b>Information</b>
                  </li>
                  <li>Phones: (123) 478 235</li>
                  <li>Email: contact@example.com</li>
                  <li>We are open: Mn-Fr 9am - 5pm</li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-column-reverse flex-md-row justify-content-between">
              <span className="my-3 my-md-0">
                @RoofMaster, All rights reserved
              </span>
              <span className="my-4 my-md-0">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="footer-icon aspect-squer mx-2 fs-5"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="footer-icon aspect-squer mx-2 fs-5"
                />
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="footer-icon aspect-squer mx-2 fs-5"
                />
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="footer-icon aspect-squer mx-2 fs-5"
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="footer-icon aspect-squer mx-2 fs-5"
                />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
