/**
 * <Map />
 *
 * TODO [error]: Map component is not working properly.
 * -  It is not rendering the map properly.
 * -  Only shows up some of the map when it does.
 * -  Importing leaflet css makes the map not render at all.
 */

import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { VStack } from "@chakra-ui/layout";

export const Map = ({ position = [0, 0] }) => {
  return (
    <div style={{ height: "600px" }}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ position: "relative", zIndex: 5, height: "100vh" }}
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
    </div>
  );
};
