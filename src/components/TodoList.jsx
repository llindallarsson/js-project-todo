import { useTodoStore } from "../stores/useTodoStore";
import { List, Paper, Box, Typography, Button } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import { TaskItem } from "./TaskItem";

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
    taskList.map((todo) => (
      <TaskItem
        key={todo.id}
        todo={todo}
        onToggle={toggleTaskCompletion}
        onDelete={deleteTask}
      />
    ));

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
        <Box display='flex' flexDirection='column' gap={4}>
          {uncompleted.length > 0 && (
            <Box>
              <Typography variant='h6' sx={{ mb: 1 }}>
                Tasks
              </Typography>
              <List>{renderTasks(uncompleted)}</List>
            </Box>
          )}

          {completed.length > 0 && (
            <Box>
              <Box
                sx={{
                  mb: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant='h6'>Completed</Typography>
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
            </Box>
          )}
        </Box>
      )}
    </Paper>
  );
};
