import React from "react";
import {
  HStack,
  VStack,
  Text,
  StackDivider,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.200"
      spacing={1}
      align="stretch"
      borderRadius="lg"
      w="100%"
      borderWidth="2px"
      maxW={{ base: "90vw", sm: "80vw", lg: "70vw" }}
      p="30px"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton onClick={deleteTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
