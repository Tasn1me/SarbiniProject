import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const GetLocation = ({ el }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  console.log("userloc",el.user_location)
  useEffect(() => {
    const geocodeAddress = async () => {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            el.user_location
          )}&key=9171f5fce47b459cab4c43c9cb03f72c`
        );
        const data = await response.json();

        if (data && data.results && data.results.length > 0) {
          const coordinates = [
            parseFloat(data.results[0].geometry.lat),
            parseFloat(data.results[0].geometry.lng),
          ];

          const latLng = L.latLng(coordinates[0], coordinates[1]);

          if (!mapRef.current) {
            mapRef.current = L.map(mapContainerRef.current, {
              zoomControl: false,
            }).setView(latLng, 13);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(mapRef.current);

            const customZoomControl = L.control.zoom({
              position: "bottomright",
            });
            customZoomControl.addTo(mapRef.current);

            const markerIcon = L.icon({
              iconUrl:
                "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-01-512.png",
              iconSize: [35, 35],
              iconAnchor: [10, 20],
            });

            L.marker(latLng, { icon: markerIcon }).addTo(mapRef.current);
          } else {
            mapRef.current.setView(latLng, 13);
          }
        }
      } catch (error) {
        console.error("Error fetching geocoding data:", error);
      }
    };

    if (el && el.user_location) {
      geocodeAddress();
    }
 }, [el.user_location]);

  return (
    <div className="leaflet-container" style={{ marginLeft: '-200px' , height: "600px", width: "650px" }}>
      <div ref={mapContainerRef} style={{ marginLeft: '-200px',height: "600px", width: "1150px" }} />
    </div>
  );
};

export default GetLocation;
