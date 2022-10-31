import React from "react";
import { Input, Button, HStack } from "@chakra-ui/react";

const Todo = () => {
  const handleSubmit = (e) => {
    e.prevent.Default();
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack m="20px">
        <Input placeholder="Next task to add" />
        <Button colorScheme="teal" variant="solid">
          Add todo
        </Button>
      </HStack>
    </form>
  );
};

export default Todo;
