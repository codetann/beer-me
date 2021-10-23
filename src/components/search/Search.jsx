import React from "react";
import { BsFillGeoAltFill, BsX } from "react-icons/bs";
import { HStack, Input, IconButton, Divider } from "@chakra-ui/react";

export const Search = ({ value, onChange, setValue }) => {
  return (
    <form>
      <HStack
        w="100%"
        h="3rem"
        spacing="0"
        rounded="xl"
        bg="#F6F8FF"
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
          onClick={() => setValue("")}
          visibility={value ? "visible" : "hidden"}
        />
        <Divider h="30px" orientation="vertical" />
        <IconButton
          bg="none"
          rounded="xl"
          color="#717AA1"
          icon={<BsFillGeoAltFill />}
        />
      </HStack>
    </form>
  );
};
