export class Series {
  private series: string;
  constructor(series: string) {
    if(series=='')
      throw new Error('series cannot be empty');
    this.series=series;
  }

  slices(sliceLength: number): number[][] {
    let sliceArray: number[][]=[];
    if (sliceLength==0)
      throw new Error('slice length cannot be zero');
    else if(sliceLength<0)
      throw new Error('slice length cannot be negative');
    else if(sliceLength>this.series.length)
      throw new Error('slice length cannot be greater than series length');

    for(let i=0; i<=this.series.length-sliceLength; i++){
      sliceArray[i]=[];
      for(let j=i; j<sliceLength+i ; j++)        
        sliceArray[i].push(Number(this.series[j]));
    }
      return sliceArray;
  }

}
