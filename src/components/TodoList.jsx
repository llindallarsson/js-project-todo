import { useTodoStore } from "../stores/useTodoStore";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Paper,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const TodoList = () => {
  const todos = useTodoStore((state) => state.tasks);
  const toggleTaskCompletion = useTodoStore(
    (state) => state.toggleTaskCompletion
  );
  const deleteTask = useTodoStore((state) => state.deleteTask);

  return (
    <Paper
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
      <List>
        {todos.map((todo) => {
          const labelId = `checkbox-list-label-${todo.id}`;

          return (
            <ListItem
              key={todo.id}
              sx={{ width: "100%" }}
              disablePadding
              secondaryAction={
                <IconButton
                  edge='end'
                  aria-label='delete'
                  onClick={() => deleteTask(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemButton role={undefined} dense sx={{ width: "100%" }}>
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                    onChange={() => toggleTaskCompletion(todo.id)}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={todo.text}
                  sx={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "text.disabled" : "text.primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};
