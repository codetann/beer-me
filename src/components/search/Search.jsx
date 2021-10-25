/**
 * <Search />
 *
 * The search component is used to search for breweries based on a query.
 *
 * The getLocation function is used to get the current location of the user.
 *
 * Value, onChange, and setValue are passed from App.js and handles the search value.
 *
 */

import React from "react";
import { BsFillGeoAltFill, BsX } from "react-icons/bs";
import { HStack, Input, IconButton, Divider } from "@chakra-ui/react";

export const Search = ({ value, onChange, setValue, getLocation }) => {
  return (
    <form>
      <HStack
        w="100%"
        h="3rem"
        left="0"
        maxW="xl"
        zIndex={10}
        spacing="0"
        rounded="xl"
        pos="absolute"
        // bg="#F6F8FF"
        bg="white"
        transition="all 0.2s"
        _focusWithin={{ ring: "3px", ringColor: "purple.100" }}
      >
        <Input
          rounded="xl"
          border="none"
          value={value}
          onChange={onChange}
          placeholder="Search"
          _focus={{ ring: "none" }}
        />

        <IconButton
          bg="none"
          icon={<BsX />}
          color={"#D7DAEC"}
          fontSize={"xl"}
          onClick={() => setValue("")}
          visibility={value ? "visible" : "hidden"}
        />
        <Divider h="30px" orientation="vertical" />
        <IconButton
          bg="none"
          rounded="xl"
          color="#717AA1"
          onClick={getLocation}
          icon={<BsFillGeoAltFill />}
        />
      </HStack>
    </form>
  );
};
