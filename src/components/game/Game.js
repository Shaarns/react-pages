// import React, { useState } from 'react';
// import { Button, Container, Typography } from '@material-ui/core';
// import './style.css';

// const Board = ({squares, onClick}) => {

//   return(
//     <div className="grid-container">
//       {squares.map((square, i) => (
//         <Square key={i} value={square} onClick={() => onClick(i)} />
//       ))};
//     </div>
//   );
// }

// const Square = ({ value, onClick }) => {
//   return(
//     <section>
//       <button className="grid-item" onClick={onClick}>
//         {value}
//       </button>
//     </section>
//   );
// }

// const calculateWinner = (sq) => {
//   const list = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//     [0, 3, 6],
//     [2, 5, 8],
//     [1, 4, 7],
//   ];
//   for(let j = 0; j < list.length; j++){
//     const [a, b, c] = list[j];
//     if(sq[a] && sq[a] ===  sq[b] && sq[a] === sq[c]){
//       return `Winner Is ${sq[a]}`;
//     }
//   }
//   for (let j = 0; j <= list.length; j++) {
//     if (sq[j] === null) {
//       return null;
//     }
//   }
//   return "Match Draw";
// }

// const Game = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [nextTurn, setNextTurn ] = useState(true);
//   const winner = calculateWinner(board);
//   // let status = "Next turn";
//   let draw;

//   const handleClick = (i) => {
//     const turn = [...board];
//     if (turn[i]){
//       return;
//     }
//     if (winner) {
//       return;
//     }
//     turn[i] = nextTurn ? "X" : "O";
//     setBoard(turn);
//     setNextTurn(!nextTurn);
//   };
//   const handleReset = () => {
//     setBoard(Array(9).fill(null));
//     setNextTurn(true);
//   }
//   return(
//     <>
//       <Board onClick={handleClick} squares={board} />
//       <Container align="center">
//         <Typography variant = "h5" gutterBottom>
//           {(winner ?  winner : `Next Player ${nextTurn ? "X" : "O"}`)
//         }
//         </Typography>
//         <Button
//           color="primary"
//           onClick={handleReset}
//           variant="contained"
//         >
//           Reset
//         </Button>
//       </Container>
//     </>
//   );
// }
// export default Game;

import React, { useState } from 'react'
import './style.css'
import Board from './Board'
import CalculateWinner from './CalculateWinner'

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext , setXIsNext] = useState(true)
  const winner =  CalculateWinner(board);

  const handleClick = (i) => {
    const turn = [...board];
    if (turn[i]){
      return;
    }
    if(winner){
      return;
    }
    turn[i] = xIsNext ? "X": "Y";
    setBoard(turn);
    setXIsNext(!xIsNext);
  }
  const handleReset = () => {
    setBoard(Array(9).fill(null));
  }

  return(
    <section>
      <Board onClick={handleClick} squares={board} />
      {(winner ? winner : `Next Move ${xIsNext ? "X" : "O" }`)}
      <button onClick={handleReset}>Reset</button>
    </section>
  )

}
export default Game