import { Box, Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";

export const EmptyState = () => (
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
    <Typography variant='body2'>Add your first task to get started.</Typography>
  </Box>
);
