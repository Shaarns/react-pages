import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

const TodoForm = (props) => {
  const [text, setText] = useState('')
  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!text) {
      return
    }
    //call parent function with parameter
    props.todo(text)
    setText('')
  }

  return (
    <div className='todoForm'>
      <form onSubmit={handleSubmit} align='center'>
        <TextField
          className='textField'
          variant='outlined'
          type='text'
          name='todo'
          size='small'
          placeholder='Enter Todo Items'
          fullWidth
          value={text}
          onChange={handleChange}
        />
        <br />
        <div className='buttonArea'>
          <button
            className='buttonPrimary'
            type='submit'
            onClick={handleSubmit}
          >
            Add Todo
          </button>
          <button
            className='buttonPrimary'
            type='submit'
            onClick={props.deleteCompleted}
          >
            Delete Completed Task
          </button>
          <button
            className='buttonSecondary'
            type='submit'
            onClick={props.deleteAll}
          >
            Delete ALL
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm
