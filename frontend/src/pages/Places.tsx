import PLaceCard from "../components/Places/PlaceCard/PLaceCard";
import axios from "axios";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
const Places = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    try {
      axios
        // .get("http://192.168.60.185:5000/places/get_tourist_sites/")
        .get("http://127.0.0.1:8000/places/get_tourist_sites/")
        .then((res) => {
          setPlaces(res.data.results);
          console.log(places);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <MapContainer
        scrollWheelZoom={true}
        center={[50.5, 40.9]}
        zoom={3}
        style={{
          height: "50vh",
          width: "80vw",
          marginTop: "8rem",
          marginInline: "auto",
          zIndex: "0",
        }}
      >
        <TileLayer
          updateWhenIdle={true}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[40, 40]} draggable={true}>
          <Popup>
            Popup Here
            <img
              src={`https://visitoromia.org/wp-content/uploads/2023/06/photo_2021-04-21_13-31-40-1.jpg`}
              style={{ width: "5rem" }}
              className="rounded-2"
            />
          </Popup>
        </Marker>
        <Marker position={[60, 40]} />
        <Marker position={[60, 60]} />
        <Marker position={[60, 90]} />
        <Marker position={[40, 90]} />
      </MapContainer>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {places.map((data) => (
            <PLaceCard
              title={data.name}
              img={"sjhfsjfkdsf"}
              description={data.description}
              distance={data.latitude}
              url={`/${data.id}/detail`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Places;
