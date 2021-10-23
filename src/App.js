import { useState } from "react";
import { Search } from "./components";
import { VStack } from "@chakra-ui/react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <VStack w="100%" minH="100vh" maxH="100vh">
      <Search
        value={search}
        setValue={setSearch}
        onChange={(e) => setSearch(e.target.value)}
      />
    </VStack>
  );
}

export default App;
