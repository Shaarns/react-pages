import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = (props) => {

  return (
    <div
      style={{ textDecoration: props.todoItem.complete ? 'line-through' : '' }}
      onClick={() => props.toggleComplete(props.index)}
    >
      {props.todoItem.title}
    </div>
  );
}
export default TodoList