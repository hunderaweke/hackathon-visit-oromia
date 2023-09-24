import { TypeAnimation } from "react-type-animation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/bundle";

function AutoType() {
  return (
    <TypeAnimation
      sequence={["Origin of Geda system", 1500, "Center of Culture", 1500, "Center of Modernity", 1500]}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
}

function HeroContent() {
  return(<div
    className="contain hero d-flex"
    style={{
      minHeight: "calc(100vh - calc(2 * clamp(0.3rem, 0.3rem + 0.9vw, 1rem)))",
    }}
  >

    <div className="container hero-content d-flex align-items-center">
      <div className="row  justify-content-center">
          <h1 className="text-dark text-center hero-font my-5">
            Visit A <AutoType />
          </h1>
          <div className="text col-12 col-md-7">
            <p className="text-dark my-5 hero-text">
              Welcome to Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dicta sapiente mollitia expedita quaerat
               consectetur earum. Aperiam quam natus ducimus.
            </p>
          </div>
          <button className="btn fs-5 py-2 col-12 col-md-6">
            Request A Quote
          </button>
        </div>
      </div>
  </div>)
}

const Hero = () => {
  return (
    <div className="hero-b">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        // navigation
        effect="fade"
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide className="hero_bg hero_bg-1">
        <HeroContent />
        </SwiperSlide>
        <SwiperSlide className="hero_bg hero_bg-2">
        <HeroContent />
        </SwiperSlide>
        <SwiperSlide className="hero_bg hero_bg-3">
        <HeroContent />
        </SwiperSlide>
        <SwiperSlide className="hero_bg hero_bg-4">
        <HeroContent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
