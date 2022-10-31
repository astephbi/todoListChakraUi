import { Heading, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import TodoList from "./components/TodoList";
import AddList from "./components/AddList";
import { useState, useEffect } from "react";

function App() {
  const initialTodos = [
    {
      id: "1",
      body: "get bread",
    },
    {
      id: "2",
      body: "get bread",
    },
    {
      id: "3",
      body: "get bread",
    },
  ];
  const [todos, setTodos] = useState(initialTodos);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }
  return (
    <VStack mb={8}>
      <NavBar />
      <Heading size="3xl" fontWeight="bold">
        Todo List App
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddList />
    </VStack>
  );
}

export default App;
