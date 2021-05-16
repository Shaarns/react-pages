import { TextField } from '@material-ui/core'
import React, { useState } from 'react'

const TodoForm = (props) => {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    if(!text){
      return;
    }
    event.preventDefault();
    props.todo(text);
    setText('');
  }

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <TextField
          variant="standard"
          type="text"
          name="todo"
          placeholder="Enter Todo item"
          fullWidth
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default TodoForm
