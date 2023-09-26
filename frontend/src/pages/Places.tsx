import PLaceCard from "../components/Places/PlaceCard/PLaceCard";
import axios from "axios";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
import useGeoLocation from "../hooks/useGeoLocation";
import markerPic from "../assets/images/marker.png";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const markerIcon = new L.Icon({
  iconUrl: markerPic,
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});
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

  const location = useGeoLocation();
  console.log(location);
  return (
    <>
      <MapContainer
        scrollWheelZoom={true}
        center={[9.145, 40.4897]}
        zoom={5}
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
        {location.loaded && !location.error && (
          <Marker
            icon={markerIcon}
            position={[location.coordinates.lat, location.coordinates.lng]}
          >
            <Popup>Your Postion</Popup>
          </Marker>
        )}
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
