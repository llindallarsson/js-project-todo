import { useState } from "react";
import { useTodoStore } from "../stores/useTodoStore";

import { TextField, Button, Stack, Paper } from "@mui/material";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const createTask = useTodoStore((state) => state.createTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    createTask(text.trim());
    setText("");
  };

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      elevation={3}
      sx={{
        maxWidth: 600,
        mx: "auto",
        my: 2,
        p: 2,
        borderRadius: 2,
        backgroundColor: "background.paper",
      }}
    >
      <Stack direction='row' spacing={2}>
        <TextField
          label='Add a task'
          variant='outlined'
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          sx={{ px: 3 }}
        >
          +
        </Button>
      </Stack>
    </Paper>
  );
};
