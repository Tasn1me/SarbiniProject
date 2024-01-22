import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LocationCustomizer = () => {
  const [position, setPosition] = useState([33.8869, 9.5375]); 

  const handleLocationChange = (latitude, longitude) => {
    setPosition([latitude, longitude]);
  };

  return (
    <div>
      <div>
        <label>Latitude: </label>
        <input type="number" step="any" onChange={(e) => handleLocationChange(e.target.value, position[1])} />
      </div>
      <div>
        <label>Longitude: </label>
        <input type="number" step="any" onChange={(e) => handleLocationChange(position[0], e.target.value)} />
      </div>

      <MapContainer center={position} zoom={13} style={{ height: '300px', width: '100%' }}>
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Your Custom Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationCustomizer;
