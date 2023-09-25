import PLaceCard from "../components/Places/PlaceCard/PLaceCard";
// import place from "../../public/images/destination_1.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
const Places = () => {
  const [place, setPlace] = useState("");
  useEffect(() => {
    try {
      axios
        .get("http://192.168.60.185:5000/places/get_tourist_sites/")
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="container py-5 my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1472.2932468631773!2d38.78300532477228!3d8.
        990596342941773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b852daab62dc5%3A0x42881f1e7f1fe151!2sOromia%20Tourism%20Commission!5e0!3m2!1sen!2set!4v1695577888989!5m2!1sen!2set"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          <PLaceCard
            title="Bale Mountains"
            img={"sjhfsjfkdsf"}
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
              praesentium."
            distance="5Km"
            url="/place/detail"
          />
          <PLaceCard
            title="Bale Mountains"
            img={"sjhfsjfkdsf"}
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
              praesentium."
            distance="5Km"
            url="/'sjhfsjfkdsf'/detail"
          />
          <PLaceCard
            title="Bale Mountains"
            img={"sjhfsjfkdsf"}
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
              praesentium."
            distance="5Km"
            url="/'sjhfsjfkdsf'/detail"
          />
          <PLaceCard
            title="Bale Mountains"
            img={"sjhfsjfkdsf"}
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
              praesentium."
            distance="5Km"
            url="/'sjhfsjfkdsf'/detail"
          />
          <PLaceCard
            title="Bale Mountains"
            img={"sjhfsjfkdsf"}
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
              praesentium."
            distance="5Km"
            url="/'sjhfsjfkdsf'/detail"
          />
          <PLaceCard
            title="Bale Mountains"
            img={"sjhfsjfkdsf"}
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
              praesentium."
            distance="5Km"
            url="/'sjhfsjfkdsf'/detail"
          />
          <PLaceCard
            title="Bale Mountains"
            img={"sjhfsjfkdsf"}
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
              praesentium."
            distance="5Km"
            url="/'sjhfsjfkdsf'/detail"
          />useState
          <PLaceCard
            title="Bale Mountains"
            img={"sjhfsjfkdsf"}
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
              praesentium."
            distance="5Km"
            url="/'sjhfsjfkdsf'/detail"
          />
        </div>
      </div>
    </>
  );
};

export default Places;
