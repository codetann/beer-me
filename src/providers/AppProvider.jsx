import { createContext, useContext } from "react";

const AppContext = createContext(null);

// create function that gets users location
function getLocation(setLocation) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) =>
      console.log(position)
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

// // create showPosition function
// function showPosition(position) {
//   console.log(position);
// }

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
}
