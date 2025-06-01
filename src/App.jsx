import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

import { Box } from "@mui/material";

export const App = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", py: 4, px: 2 }}>
      <Header></Header>
      <TodoList />
      <TodoForm></TodoForm>
    </Box>
  );
};
