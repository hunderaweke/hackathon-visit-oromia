import Hero from "../components/Home/2_hero/Hero";
import Funfacts from "../components/Home/3_funfacts/Funfacts";
import FeaturedDestination from "../components/Home/4_featuredDestination/FeaturedDestination";
import Testimonial from "../components/Home/5_testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <Funfacts />
      <Testimonial />
    </>
  );
};

export default Home;
