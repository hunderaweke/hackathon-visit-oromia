import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";

import { useMediaQuery } from "@mui/material";

import styles from "./feaatured.module.css";

import destination_1 from "../../../assets/images/destination_1.jpg";
import destination_2 from "../../../assets/images/destination_2.png";
import destination_3 from "../../../assets/images/destination_3.jpg";
import destination_4 from "../../../assets/images/destination_4.jpg";
import destination_5 from "../../../assets/images/destination_5.jpg";
import destination_6 from "../../../assets/images/destination_6.jpg";

// import destination_8 from '../../../assets'

interface props {
  profile: string;
  name: string;
  role: string;
}

function TeamCard({ profile, name, role }: props) {
  return (
    <div className="col px-1">
      <div className="bg-primay p-2 bg-light rounded-2">
        <img src={profile} alt="Profile" className="w-100 rounded-3" />
        <h5 className="my-2">{name}</h5>
        <h5 className="orange fw-bold">{role}</h5>
      </div>
    </div>
  );
}

const FeaturedDestination = () => {
  let slidesPerViewCount = 1;
  const widthLg = useMediaQuery("(min-width: 992px)");
  const widthMd = useMediaQuery("(min-width: 768px)");
  widthLg
    ? (slidesPerViewCount = 4)
    : widthMd
    ? (slidesPerViewCount = 2)
    : (slidesPerViewCount = 1);

  return (
    <div className={`containet-fluid bg-dark-blue py-5 ${styles.featured}`}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={slidesPerViewCount}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="container-sm py-5"
      >
        <SwiperSlide>
          <TeamCard
            name="Yayo Biodiversity Reserve"
            profile={destination_1}
            role="Ilu Abba Boor"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard
            name="Bale National Park"
            profile={destination_2}
            role="Bale"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard
            name="Yayo Biodiversity"
            profile={destination_3}
            role="Ilu Abba Bor"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard name="Holqa Sofumar" profile={destination_4} role="Bale" />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard name="Wenci Lake" profile={destination_5} role="Shewa" />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard name="Geda System" profile={destination_6} role="Guji" />
        </SwiperSlide>
        <div slot="container-start" className="mb-5">
          <h3 className="text-left px-5 text-dark">
            <b>Featured</b> Destination
          </h3>
        </div>
      </Swiper>
    </div>
  );
};

export default FeaturedDestination;
