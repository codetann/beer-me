import { useState, useEffect } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);

  function getLocation() {
    if (location) {
      return location;
    } else {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
        });
      }
    }
  }

  return { location, getLocation };
};
