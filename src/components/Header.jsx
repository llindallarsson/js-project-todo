import { useTodoStore } from "../stores/useTodoStore";
import { Box, Typography, Paper } from "@mui/material";

export const Header = () => {
  const total = useTodoStore((state) => state.tasks.length);
  const completed = useTodoStore(
    (state) => state.tasks.filter((task) => task.completed).length
  );

  return (
    <Paper
      component='header'
      elevation={3}
      sx={{
        maxWidth: 600,
        mx: "auto",
        my: 4,
        p: 3,
        borderRadius: 2,
        textAlign: "center",
        backgroundColor: "background.paper",
        borderBottom: "2px solid",
        borderColor: "divider",
      }}
    >
      <Typography variant='h4' component='h1' gutterBottom>
        To do app
      </Typography>
      <Typography variant='subtitle1' color='text.secondary'>
        {completed} of {total} tasks completed
      </Typography>
    </Paper>
  );
};
