import { useState } from "react";
import { Search } from "./components";
import { VStack } from "@chakra-ui/react";
import { useLocation } from "./hooks";

function App() {
  const [search, setSearch] = useState("");
  const { location, getLocation } = useLocation();

  return (
    <VStack w="100%" minH="100vh" maxH="100vh">
      <Search
        value={search}
        setValue={setSearch}
        getLocation={getLocation}
        onChange={(e) => setSearch(e.target.value)}
      />
    </VStack>
  );
}

export default App;
