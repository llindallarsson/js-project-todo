import { useTodoStore } from "../stores/useTodoStore";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";

export const TodoList = () => {
  const todos = useTodoStore((state) => state.tasks);
  const toggleTaskCompletion = useTodoStore(
    (state) => state.toggleTaskCompletion
  );
  const deleteTask = useTodoStore((state) => state.deleteTask);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <ListItem
            key={todo.id}
            secondaryAction={
              // här kan vi göra en redigeringsknapp alt delete
              <IconButton
                edge='end'
                aria-label='comments'
                onClick={() => deleteTask(todo.id)}
              >
                <CommentIcon />
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
