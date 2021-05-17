import React from 'react'

const TodoList = (props) => {
  return (
    <div style={{ textDecoration: props.items.complete ? 'line-through' : '' }}>
      <div className="todoSection">
          <div className="todoText" >{props.value}</div>
          <div className="todoButtons">
            <button
              className="buttonPrimary"
              onClick={() => props.toggle(props.items.id)}>Comeplete</button>
            <button
              className="buttonSecondary"
              onClick={props.handleDelete}>
              delete
          </button>
          </div>
      </div>
    </div>
  )
}

export default TodoList
