import React from 'react'

const TodoList = (props) => {
  return (
    < div className="todoList" style={{ textDecoration: props.items.complete ? 'line-through' : '' }}>
      {props.value}
      {(props.value)?(
        <div>
          <button onClick={() => props.toggle(props.index)}>Comeplete</button>
          <button onClick={() => props.handleDelete(props.index)}>
            delete
          </button>
        </div>
      ) : (
        ''
      )
    }
    </div>
  )
}

export default TodoList
