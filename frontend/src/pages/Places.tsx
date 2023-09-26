import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import useGeoLocation from "../hooks/useGeoLocation";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PLaceCard from "../components/Places/PlaceCard/PLaceCard";
import markerPic from "../assets/images/marker.png";
import nearMarkerPic from "../assets/images/location.png";

const nearMarkerIcon = new L.Icon({
  iconUrl: nearMarkerPic,
  iconSize: [40, 40],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});
const markerIcon = new L.Icon({
  iconUrl: markerPic,
  iconSize: [40, 40],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});
const Places = () => {
  const [places, setPlaces] = useState([]);
  const [nearPlaces, setNearPlaces] = useState([]);
  const location = useGeoLocation();
  useEffect(() => {
    axios
      .get("http://192.168.137.1:5000/places/get_tourist_sites/")
      .then((res) => {
        setPlaces(res.data.results);
      })
      .catch((error) => {
        console.log("Error fetching places:", error);
      });
  }, []);

  useEffect(() => {
    if (location.loaded && !location.error) {
      axios
        .get(
          `http://192.168.137.1:5000/places/get_nearby_tourist_places/?latitude=${location.coordinates.lat}&longitude=${location.coordinates.lng}&distance=50`
        )
        .then((res) => {
          setNearPlaces(res.data);
        })
        .catch((error) => {
          console.log("Error fetching nearby places:", error);
        });
    }
  }, [location]);

  return (
    <>
      <MapContainer
        scrollWheelZoom={true}
        center={[9.007, 38.7678]}
        zoom={12}
        style={{
          height: "70vh",
          width: "80vw",
          marginTop: "6rem",
          marginBottom: "4rem",
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
            <Popup>Your Position</Popup>
          </Marker>
        )}
        {nearPlaces.map((place) => (
          <Marker
            key={place.id}
            icon={nearMarkerIcon}
            position={[place.latitude, place.longitude]}
          >
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {places.map((data) => (
            <PLaceCard
              key={data.id}
              title={data.name}
              img={data.image_url}
              description={data.description}
              distance={data.latitude}
              url={`/detail`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Places;
