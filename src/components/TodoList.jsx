import { useTodoStore } from "../stores/useTodoStore";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const TodoList = () => {
  const todos = useTodoStore((state) => state.tasks);
  const toggleTaskCompletion = useTodoStore(
    (state) => state.toggleTaskCompletion
  );
  const deleteTask = useTodoStore((state) => state.deleteTask);

  return (
    <List sx={{ maxWidth: 600, width: "100%", mx: "auto" }}>
      {todos.map((todo) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <ListItem
            key={todo.id}
            secondaryAction={
              // här kan vi göra en redigeringsknapp alt delete
              <IconButton
                edge='end'
                aria-label='delete task'
                onClick={() => deleteTask(todo.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
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
              <ListItemText id={labelId} primary={todo.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
