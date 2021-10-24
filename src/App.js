import { useState } from "react";
import { useLocation } from "./hooks";
import { VStack } from "@chakra-ui/react";
import { Search, Map, MobileView } from "./components";

function App() {
  const [search, setSearch] = useState("");
  const { location, getLocation } = useLocation();

  return (
    <MobileView
      search={search}
      location={location}
      setSearch={setSearch}
      getLocation={getLocation}
    />
  );
}

export default App;
