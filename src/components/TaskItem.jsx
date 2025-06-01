import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const TaskItem = ({ todo, onToggle, onDelete }) => {
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton
          edge='end'
          aria-label='delete task'
          onClick={() => onDelete(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton dense sx={{ width: "100%" }}>
        <ListItemIcon>
          <Checkbox
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            inputProps={{ "aria-labelledby": labelId }}
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
};
