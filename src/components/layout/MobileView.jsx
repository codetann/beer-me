import React from "react";
import { Search, Map } from "..";
import { VStack } from "@chakra-ui/react";

export const MobileView = (props) => {
  const { search, setSearch, getLocation, location } = props;

  return (
    <VStack w="100%" minH="100vh" overflow="hidden">
      <Search
        value={search}
        setValue={setSearch}
        getLocation={getLocation}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Map position={location} />
    </VStack>
  );
};
