import React from 'react'

const Square = ({value, onClick}) => {
  return (
    <div>
      <button  className="grid-item" onClick={onClick}>
        {value}
      </button>
    </div>
  )
}

export default Square

