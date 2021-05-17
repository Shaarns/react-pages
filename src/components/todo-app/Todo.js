import { Container, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './style.css'

const Todo = () => {
  const [todo, setTodo] = useState([])
  const [showTodo, setShowTodo] = useState('all')

  const addTodo = (text) => {
    const newTodo = [{ text, complete: false, id: Date.now()}, ...todo]
    setTodo(newTodo);
    console.log(todo);
  }
  const toggleComplete = (id) => {
    const completed = todo.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          complete: todo.complete = true
        }
      }
      else{
        return todo;
      }
    })
    setTodo(completed);
    }
  const deleteTodo = (i) => {
    const deletedTodo = [...todo];
    //splice take remove 1 element at i index
    deletedTodo.splice(i, 1);
    console.log(deletedTodo);
    setTodo(deletedTodo);
  }
  const handleDeleteAllList = () => {
   const deleteAll = [...todo];
   if(deleteAll.length === 0)
   return;
   deleteAll.splice(0, deleteAll.length)
   //another method to empty array
   //  deleteAll.length = 0;
   setTodo(deleteAll);
   console.log(deleteAll);
  }
  const handleDeletedCompleted = () => {
    setTodo(todo.filter(todo => !todo.complete));
  };

  let todos = [];
  if (showTodo === 'all') {
    todos = todo;
  }
  else if (showTodo === 'active') {
    todos = todo.filter(todo => todo.complete);
  }
  else if (showTodo === 'complete') {
    todos = todo.filter(todo => !todo.complete);
  }
  const updateShowTodo = (status) => {
    setShowTodo(status);
  }

  return (
    <div>
      <Container maxWidth="md" className="container">
        <Typography variant="h4" align="center" gutterBottom>
          Todo App
        </Typography>
        <TodoForm
          todo={addTodo}
          deleteAll={handleDeleteAllList}
          deleteCompleted={handleDeletedCompleted}
        />
        <hr className="hrLine" />
        <div align="center" className="margin">
          Tasks left {todo.filter(todo => !todo.complete).length}
        </div>
        {todos.map(items => (
          <TodoList
            key={items.id}
            items={items}
            value={items.text}
            toggle={toggleComplete}
            handleDelete={deleteTodo}
          />
        ))}
        <button onClick={() => updateShowTodo('all')} >All</button>
        <button onClick={() => updateShowTodo('complete')} >Show Active</button>
        <button onClick={() => updateShowTodo('active')} >Show Completed</button>
      </Container>
    </div>
  )
}
export default Todo
