import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet"
import loc from "../loc.png"

const Map = () => {
  const position = [33.8869, 9.5375]; // Coordinates for Tunisia

  return (
    <MapContainer center={position} zoom={6} style={{ height: '250px', width: '250px' }}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Tunisia</Popup>
      </Marker>
    </MapContainer>
  );

};
let Icon=L.icon({
  iconUrl:loc,iconSize: [30, 30]
})
L.Marker.prototype.options.icon=Icon
export default Map;
