export class Squares {
  private n:number;
  private sum_Squares:number =0;
  private square_Sum: number=0;
  
  constructor(count: number) {
    this.n=count;
  }

  get sumOfSquares(): number {
     this.sum_Squares= this.n * (this.n + 1) * (2 * this.n + 1) / 6;
    return this.sum_Squares;
  }

  get squareOfSum(): number {
    this.square_Sum =(this.n * (this.n + 1) / 2)**2;
    return this.square_Sum;
  }

  get difference(): number {
    return this.square_Sum - this.sum_Squares;
    
  }
}
