
export class GameOfLife {
  private matrix: number[][];

  constructor(matrix: number[][]) {
    this.matrix = matrix;
  }

  public tick(): void {
    const rows = this.matrix.length;

    // Empty matrix
    
    if (rows === 0)
      return;

    const cols = this.matrix[0].length;

    const next = this.matrix.map((row) => [...row]);

    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        let liveNeighbors = 0;

        for (const [rowOffset, colOffset] of directions) {
          const neighborRow = row + rowOffset;
          const neighborCol = col + colOffset;

          if (
            neighborRow >= 0 &&
            neighborRow < rows &&
            neighborCol >= 0 &&
            neighborCol < cols
          ) {
            liveNeighbors += this.matrix[neighborRow][neighborCol];
          }
        }

        // Live cell
        if (this.matrix[row][col] === 1) {
          if (liveNeighbors === 2 || liveNeighbors === 3) {
            next[row][col] = 1;
          } else {
            next[row][col] = 0;
          }
        }

        // Dead cell
        else {
          if (liveNeighbors === 3) {
            next[row][col] = 1;
          } else {
            next[row][col] = 0;
          }
        }
      }
    }

    this.matrix = next;
  }

  public state(): number[][] {
    return this.matrix;
  }
}