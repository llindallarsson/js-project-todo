import { useTodoStore } from "../stores/useTodoStore";
import { Box, Typography } from "@mui/material";

export const Header = () => {
  const total = useTodoStore((state) => state.tasks.length);
  const completed = useTodoStore(
    (state) => state.tasks.filter((task) => task.completed).length
  );

  return (
    <Box
      component='header'
      sx={{
        textAlign: "center",
        maxWidth: 600,
        mx: "auto",
        my: 4, // marginal ovan/under
      }}
    >
      <Typography variant='h4' component='h1' gutterBottom>
        To do app
      </Typography>
      <Typography variant='subtitle1'>
        {completed} of {total} tasks completed
      </Typography>
    </Box>
  );
};
