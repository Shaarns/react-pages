import React, { useState } from 'react'
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'

const TodoForm = ({todo}) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length === 0) {
      return;
    }
    todo(text);
    setText('');
  };

  return (
    <section>
      <Container maxWidth="sm">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3">
              Todo App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit} method="POST">
              <TextField
                name="items"
                type="text"
                value={text}
                onChange={handleChange}
                variant="standard"
                placeholder="Enter Todo Item"
                fullWidth
              />
            </form>
            <br />
            {/* <Button
              variant="contained"
              color="secondary"
            onClick={handleDelete}
            >
              Delete</Button> */}
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default TodoForm;