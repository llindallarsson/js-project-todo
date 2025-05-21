import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

export const App = () => {
  return (
    <>
      <TodoForm></TodoForm>
      <TodoList />
    </>
  );
};
