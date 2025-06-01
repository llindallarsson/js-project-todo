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
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import InboxIcon from "@mui/icons-material/Inbox";

export const TodoList = () => {
  const todos = useTodoStore((state) => state.tasks);
  const toggleTaskCompletion = useTodoStore(
    (state) => state.toggleTaskCompletion
  );
  const deleteTask = useTodoStore((state) => state.deleteTask);
  const clearCompletedTasks = useTodoStore(
    (state) => state.clearCompletedTasks
  );
  const uncompleted = todos.filter((t) => !t.completed);
  const completed = todos.filter((t) => t.completed);

  const renderTasks = (taskList) =>
    taskList.map((todo) => {
      const labelId = `checkbox-list-label-${todo.id}`;
      return (
        <ListItem
          key={todo.id}
          sx={{ width: "100%" }}
          disablePadding
          secondaryAction={
            <IconButton
              edge='end'
              aria-label='delete task'
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
                aria-label='task completed'
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
    });

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 600,
        mx: "auto",
        my: 2,
        p: todos.length === 0 ? 2 : 2,
        borderRadius: 2,
        backgroundColor: "background.paper",
        minHeight: 150,
      }}
    >
      {todos.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <InboxIcon sx={{ fontSize: 60, color: "primary.main" }} />
          <Typography variant='h6'>There's nothing here...</Typography>
          <Typography variant='body2'>
            Add your first task to get started.
          </Typography>
        </Box>
      ) : (
        <>
          {uncompleted.length > 0 && (
            <>
              <Typography variant='h6' sx={{ mb: 1 }}>
                Tasks
              </Typography>
              <List>{renderTasks(uncompleted)}</List>
            </>
          )}

          {completed.length > 0 && (
            <>
              <Box
                sx={{
                  mt: 3,
                  mb: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant='h6' sx={{ mt: 3, mb: 1 }}>
                  Completed
                </Typography>
                <Button
                  size='small'
                  color='error'
                  onClick={clearCompletedTasks}
                  sx={{ textTransform: "none" }}
                >
                  Clear all
                </Button>
              </Box>
              <List>{renderTasks(completed)}</List>
            </>
          )}
        </>
      )}
    </Paper>
  );
};
