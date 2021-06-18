// import React, { useState } from "react";
// import { Button, Container } from "@material-ui/core";

// const Counter = () => {

//   let [count, setCount] = useState(0);

//  const handleClick = () => {
//     setCount(count + 1)

//   }
// const handleClickDecrease = () => {
//   if(count > 0)
//   setCount(count - 1 )
//   else
//   return setCount("Maximum decreased")
// }

//     return(
//       <Container align="center">
//       <h1>Counter: {count}</h1>
//       <Button
//         color="primary"
//         variant="outlined"
//         onClick={handleClick}
//       >
//         Increase Counter
//       </Button>
//       <Button
//         color="secondary"
//         variant="contained"
//         onClick={handleClickDecrease}
//       >
//         Decrease counter
//       </Button>
//       </Container>
//     )
// }

// export default Counter;

import React from 'react'
import { Button, Container } from '@material-ui/core'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  handleClickDecrease = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  render() {
    return (
      <Container align='center'>
        <h1>Counter: {this.state.count}</h1>
        <Button variant='outlined' color='primary' onClick={this.handleClick}>
          Increase Counter
        </Button>
        <Button
          variant='outlined'
          color='primary'
          onClick={this.handleClickDecrease}
        >
          Decrease Counter
        </Button>
      </Container>
    )
  }
}
