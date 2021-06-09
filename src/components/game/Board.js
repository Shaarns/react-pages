import React from 'react'
import Square from './Square'

const Board = ({ squares, onClick }) => {
  return (
    <div className='grid-container'>
      {squares.map((square, i) => (
        <Square onClick={() => onClick(i)} value={square} />
      ))}
    </div>
  )
}

export default Board
