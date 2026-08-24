export const gamestate = (board: string[]): string => {
  const xCount = board.join('').split('X').length - 1
  const oCount = board.join('').split('O').length - 1

  // Check turn order
  if (xCount > oCount + 1) {
    throw new Error('Wrong turn order: X went twice')
  }

  if (oCount > xCount) {
    throw new Error('Wrong turn order: O started')
  }

  const lines = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ]

  const hasWon = (player: string): boolean =>
    lines.some(line =>
      line.every(([row, col]) => board[row][col] === player)
    )

  const xWon = hasWon('X')
  const oWon = hasWon('O')

  // Both cannot win
  if (xWon && oWon) {
    throw new Error(
      'Impossible board: game should have ended after the game was won'
    )
  }

  // Winner must have made the last move
  if (xWon && xCount !== oCount + 1) {
    throw new Error(
      'Impossible board: game should have ended after the game was won'
    )
  }

  if (oWon && xCount !== oCount) {
    throw new Error(
      'Impossible board: game should have ended after the game was won'
    )
  }

  if (xWon || oWon) {
    return 'win'
  }

  // No empty spaces
  if (!board.some(row => row.includes(' '))) {
    return 'draw'
  }

  return 'ongoing'
}