import React, { useState } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './style.css'

const Todo = () => {
  const [todo, setTodo] = useState([])
  // const [showTodo, setShowTodo] = useState('all')

  const addTodo = (text) => {
    const newTodo = [{ text, complete: false, id: Date.now() }, ...todo]
    setTodo(newTodo)
    console.log(todo)
  }
  const toggleComplete = (id) => {
    const completed = todo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: (todo.complete = !todo.complete),
        }
      } else {
        return todo
      }
    })
    setTodo(completed)
  }
  const deleteTodo = (i) => {
    const deletedTodo = [...todo]
    //splice take remove 1 element at i index
    deletedTodo.splice(i, 1)
    console.log(deletedTodo)
    setTodo(deletedTodo)
  }
  const handleDeleteAllList = () => {
    const deleteAll = [...todo]
    if (deleteAll.length === 0) return
    deleteAll.splice(0, deleteAll.length)
    //another method to empty array
    //  deleteAll.length = 0;
    setTodo(deleteAll)
    console.log(deleteAll)
  }
  const handleDeletedCompleted = () => {
    setTodo(todo.filter((todo) => !todo.complete))
  }

  let completedTasks = []
  completedTasks = todo.filter((todo) => todo.complete)
  let unCompletedTasks = []
  unCompletedTasks = todo.filter((todo) => !todo.complete)
  // if (showTodo === 'all') {
  //   todos = todo
  // } else if (showTodo === 'active') {
  //   todos = todo.filter((todo) => todo.complete)
  // } else if (showTodo === 'complete') {
  //   todos = todo.filter((todo) => !todo.complete)
  // }

  // const updateShowTodo = (status) => {
  //   setShowTodo(status)
  // }

  return (
    <div className='todoApp'>
      <Container>
        <Grid container justify='space-around'>
          <Grid item sm={5} xs={12}>
            <Typography
              color='secondary'
              variant='h4'
              align='center'
              gutterBottom
            >
              Todo App
            </Typography>
            <TodoForm
              todo={addTodo}
              deleteAll={handleDeleteAllList}
              deleteCompleted={handleDeletedCompleted}
            />
            <hr className='hrLine' />
            {/* <button
              className='buttonTertiary'
              onClick={() => updateShowTodo('all')}
            >
              All
            </button>
            <button
              className='buttonTertiary'
              onClick={() => updateShowTodo('complete')}
            >
              Show Active
            </button>
            <button
              className='buttonTertiary'
              onClick={() => updateShowTodo('active')}
            >
              Show Completed
            </button> */}
            <Typography className='taskLeft' variant='h5'>
              Completed {todo.filter((todo) => todo.complete).length}
            </Typography>
            <div className='completedTasks'>
              {completedTasks.map((items) => (
                <TodoList
                  value={items.text}
                  items={items}
                  key={items.id}
                  toggle={toggleComplete}
                />
              ))}
            </div>
          </Grid>
          <Grid item sm={5} xs={12}>
            <Typography
              align='center'
              className='taskLeft'
              variant='h5'
              color='secondary'
            >
              Tasks left {todo.filter((todo) => !todo.complete).length}
            </Typography>
            {unCompletedTasks.map((items) => (
              <TodoList
                key={items.id}
                items={items}
                value={items.text}
                toggle={toggleComplete}
                handleDelete={deleteTodo}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default Todo
