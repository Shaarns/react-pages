const CalculateWinner = (sq) => {
  const list = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 6],
  ]

  for (let i = 0; i < list.length; i++) {
    const [a, b, c] = list[i]
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) return `Winner Is ${sq[a]}`
  }
  for (let j = 0; j <= list.length; j++) {
    if (sq[j] === null) {
      return null
    }
  }
  return 'Match Draw'
}

export default CalculateWinner
