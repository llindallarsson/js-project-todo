import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

export const App = () => {
  return (
    <>
      <Header></Header>
      <TodoList />
      <TodoForm></TodoForm>
    </>
  );
};
