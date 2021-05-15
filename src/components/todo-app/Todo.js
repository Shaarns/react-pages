import React, { useState } from 'react'
import { Container, Typography } from '@material-ui/core'
import TodoList from './TodoList';
import TodoForm from './TodoForm'

const style={
  cursor: 'default',
  textTransform: 'uppercase',
}

const Todo = () => {
  const [todoItems, setTodoItems] = useState([
    {
      title: '',
      completed: true
    },
  ]);

  const todo = (title) => {
    const newTodoItems = [{ title, complete: false }, ...todoItems, ];
    setTodoItems(newTodoItems);
  }

  const toggleComplete = index => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete = !(newTodoItems[index].complete);
    setTodoItems(newTodoItems);
  }

  return (
    <section>
      <TodoForm todo={todo}/>
      <Container maxWidth="sm">
        {todoItems.map((todoItem, i) => (
          <Typography variant="h6" color="textSecondary" style={style} >
            <TodoList
              key={i}
              index={i}
              todoItem={todoItem}
              toggleComplete = {toggleComplete}
            />
            </Typography>
        ))}
      </Container>
    </section>
  )
}

export default Todo;
