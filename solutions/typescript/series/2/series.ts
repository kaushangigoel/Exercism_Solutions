export class Series {
  private series: number[];
  constructor(series: string) {
    if(series=='')
      throw new Error('series cannot be empty');
    
    //converting series to array [...series]
    //then convert each char to number
    this.series=[...series].map(Number);
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
      sliceArray[i]=this.series.slice(i,i+sliceLength);
    }
      return sliceArray;
  }

}
