/**
 * <Map />
 *
 * TODO [error]: Map component is not working properly.
 * -  It is not rendering the map properly.
 * -  Only shows up some of the map when it does.
 * -  Importing leaflet css makes the map not render at all.
 */

import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { VStack } from "@chakra-ui/layout";

export const Map = ({ position }) => {
  if (!position) return <p>Loading...</p>;
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
