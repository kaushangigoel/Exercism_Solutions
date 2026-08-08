export class Matrix {
  array: number[][]=[];
  
  constructor(input: string) {
    let i:number=0;
    let rows:string[]=input.split('\n');
    for (const row of rows)
      this.array[i++]=row.split(' ').map(Number);
  }

  get rows(): number[][] {
    return this.array;
  }

  get columns(): number[][] {
    let transpose:number[][]=[];
    for (let index = 0; index < this.array[0].length; index++) {
      transpose[index]=[];
      for (let index2 = 0; index2 < this.array.length; index2++) {
          transpose[index][index2]=this.array[index2][index];
      } 
    }
    return transpose;
  }
  
}
