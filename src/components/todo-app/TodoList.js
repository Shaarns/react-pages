import React from 'react'

const TodoList = (props) => {
  return (
    <div style={{ textDecoration: props.items.complete ? 'line-through' : '' }}>
      {(props.value) ? (
      <div className="todoSection">
          <div className="todoText" >{props.value}</div>
          <div className="todoButtons">
            <button
              className="buttonComplete"
              onClick={() => props.toggle(props.index)}>Comeplete</button>
            <button
              className="buttonDelete"
              onClick={() => props.handleDelete(props.index)}>
              delete
          </button>
          </div>
      </div>
      ) : (
        ''
      )
    }
    </div>
  )
}

export default TodoList
