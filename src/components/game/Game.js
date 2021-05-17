import React, { useState } from 'react'
import './style.css'
import Board from './Board'
import CalculateWinner from './CalculateWinner'
import { Button, Container, Typography } from '@material-ui/core'

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
    turn[i] = xIsNext ? "X": "O";
    setBoard(turn);
    setXIsNext(!xIsNext);
  }
  const handleReset = () => {
    setBoard(Array(9).fill(null));
  }

  return(
    <Container >
      <Typography variant="h4" align="center">
        Tic Tac Toe
      </Typography>
      <Board onClick={handleClick} squares={board} />
      <Container align="center">
        <Typography variant = "h5" gutterBottom>
          {(winner ?  winner : `Next Player ${xIsNext ? "X" : "O"}`)
          }
        </Typography>
        <Button
          color="primary"
          onClick={handleReset}
          variant="contained"
        >
          Reset
        </Button>
        </Container>
    </Container>
  )

}
export default Game