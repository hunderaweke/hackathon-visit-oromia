import "swiper/css/bundle";
import { useNavigate } from "react-router";

import "./hero.css";

function HeroContent() {
  const navigation = useNavigate();
  return (
    <div
      className="contain hero d-flex"
      style={{
        minHeight:
          "calc(100vh - calc(2 * clamp(0.3rem, 0.3rem + 0.9vw, 1rem)))",
      }}
    >
      <div className="container d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center">
          <h1 className="text-dark text-center my-3 lead_text Extrabold header">
            Let's Make Traveling Fun
          </h1>
          <div className="text col-12 col-md-7">
            <p className="text-dark my-2 text-center intro-text">
              Welcome to Imaltu Tourism Platform the best Place for visiting
              Oromia and Ethiopia with Your friends and family even in your own
              group.
            </p>
          </div>
          <button
            className="btn my-5 text-white reques-button"
            onClick={() => {
              navigation("/signup");
            }}
          >
            Join Us Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
