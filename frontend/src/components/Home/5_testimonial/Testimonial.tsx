import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

import profile_1 from "../../../../public/person/person_1.jpg";
import profile_2 from "../../../../public/person/person_2.jpg";
import profile_3 from "../../../../public/person/person_3.jpg";
import profile_4 from "../../../../public/person/person_4.jpg";
import profile_5 from "../../../../public/person/person_5.jpg";

import { useMediaQuery } from "@mui/material";

interface props {
  testimonialText: string;
  name: string;
  role: string;
  image: string;
}

function TestimonialCard({ testimonialText, name, role, image }: props) {
  return (
    <div className="col p-4  my-5">
      <div className="bg-primay p-3 testimonial-card">
        <FontAwesomeIcon className="fs-3 m-2 orange" icon={faQuoteLeft} />
        <p className="my-3">{testimonialText}</p>
        <div className="d-flex align-items-center">
          <img
            src={image}
            alt="PP"
            className="aspect-squer"
            style={{ width: "2.5rem", borderRadius: "50%" }}
          />
          <div>
            <span className="fw-bold mx-2">{name}</span>
            <span>{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const Testimonial = () => {
  let slidesPerViewCount = 1;
  const widthLg = useMediaQuery("(min-width: 992px)");
  const widthMd = useMediaQuery("(min-width: 768px)");
  widthLg
    ? (slidesPerViewCount = 3)
    : widthMd
    ? (slidesPerViewCount = 2)
    : (slidesPerViewCount = 1);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={slidesPerViewCount}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      centeredSlides={true}
      centeredSlidesBounds={true}
      className="container-sm my-5 py-5"
    >
      <SwiperSlide className="bg-primay">
        <TestimonialCard
          testimonialText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur tempore maxime possimus tempora eveniet, iusto non deserunt ad rerum."
          name="Luis Lindesy"
          role="Italy"
          image={profile_1}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          testimonialText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur tempore maxime possimus tempora eveniet, iusto non deserunt ad rerum."
          name="Adonis Roberts"
          role="England"
          image={profile_2}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          testimonialText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur tempore maxime possimus tempora eveniet, iusto non deserunt ad rerum."
          name="Luis Lindesy"
          role="USA"
          image={profile_3}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          testimonialText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur tempore maxime possimus tempora eveniet, iusto non deserunt ad rerum."
          name="Adonis Roberts"
          role="South Africa"
          image={profile_4}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          testimonialText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur tempore maxime possimus tempora eveniet, iusto non deserunt ad rerum."
          name="Luis Lindesy"
          role="Kenya"
          image={profile_5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          testimonialText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur tempore maxime possimus tempora eveniet, iusto non deserunt ad rerum."
          name="Adonis Roberts"
          role="Canada"
          image={profile_3}
        />
      </SwiperSlide>
      <div slot="container-start">
        <h1 className="text-center orange">Testimonial</h1>
        <h3 className="text-center">What our client said about us</h3>
      </div>
    </Swiper>
  );
};

export default Testimonial;

