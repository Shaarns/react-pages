import { Container, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './style.css'

const Todo = () => {
  const [todo, setTodo] = useState([ { title: '', complete: null } ])

  const addTodo = (title) => {
    const newTodo = [{ title, complete: false }, ...todo]
    setTodo(newTodo);
    console.log(newTodo);
  }
  const toggleComplete = (i) => {
    const newTodoList = [...todo];
    newTodoList[i].complete = true;
    setTodo(newTodoList);
    console.log(todo[i]);
  }
  const deleteTodo = (i) => {
    const deletedTodo = [...todo];
    deletedTodo.splice(i, 1);
    console.log(deletedTodo);
    setTodo(deletedTodo);
  }

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h4">
          Todo App
        </Typography>
        <TodoForm todo={addTodo} />
        {todo.map((items, i) => (
          <div>
            <TodoList
              key={i}
              index={i}
              items={items}
              todo={todo}
              value={items.title}
              toggle={toggleComplete}
              handleDelete={deleteTodo}
            />
          </div>
        ))}
      </Container>
    </div>
  )
}

export default Todo
