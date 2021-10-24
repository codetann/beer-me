import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import "leaflet/dist/leaflet.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
