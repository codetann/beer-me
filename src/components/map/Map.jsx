/**
 * <Map />
 */

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Map = ({ position }) => {
  if (!position) return <p>Loading...</p>;
  return (
    <MapContainer
      zoom={13}
      center={position}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
