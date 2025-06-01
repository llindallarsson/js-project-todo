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
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import InboxIcon from "@mui/icons-material/Inbox";

export const TodoList = () => {
  const todos = useTodoStore((state) => state.tasks);
  const toggleTaskCompletion = useTodoStore(
    (state) => state.toggleTaskCompletion
  );
  const deleteTask = useTodoStore((state) => state.deleteTask);

  if (todos.length === 0) {
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
          textAlign: "center",
          color: "text.secondary",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <InboxIcon sx={{ fontSize: 60, color: "primary.main" }} />
        <Typography variant='h6' component='p'>
          There's nothing here...
        </Typography>
        <Typography variant='body2'>
          Add your first task to get started.
        </Typography>
      </Paper>
    );
  }

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
                    aria-label='delete'
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
