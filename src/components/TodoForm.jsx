import { useState } from "react";
import { useTodoStore } from "../stores/useTodoStore";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const createTask = useTodoStore((state) => state.createTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // hindrar tomma inputs
    createTask(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        direction='row'
        spacing={2}
        sx={{ maxWidth: 600, width: "100%", mx: "auto" }}
      >
        <TextField
          label='Add a task'
          variant='outlined'
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type='submit' variant='contained'>
          +
        </Button>
      </Stack>
    </form>
  );
};
