import { useState } from "react";
import { Search, Map } from "./components";
import { useLocation } from "./hooks";
import { VStack } from "@chakra-ui/react";

function App() {
  const [search, setSearch] = useState("");
  const { location, getLocation } = useLocation();

  return (
    <VStack w="100%" minH="100vh">
      <Search
        value={search}
        setValue={setSearch}
        getLocation={getLocation}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Map position={location} />
    </VStack>
  );
}

export default App;
