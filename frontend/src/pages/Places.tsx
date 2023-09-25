import PLaceCard from "../components/Places/PlaceCard/PLaceCard";
import axios from "axios";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import { useState, useEffect } from "react";

const Places = () => {
  // const [place,setPlace] = useState('');
  // useEffect(()=>{try{
  //     axios.get("http://192.168.60.185:5000/places/get_tourist_sites/")
  //     .then((res)=>{
  //       console.log(res.data)
  //     })
  //   }catch(error){
  //     console.log(error)
  //   }},[])
  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
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
        </div>
      </div>
    </>
  );
};

export default Places;
