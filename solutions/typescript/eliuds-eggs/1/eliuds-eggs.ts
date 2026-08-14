//
// This is only a SKELETON file for the 'Pop Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const eggCount = (displayValue: number): number => {
  let count: number =0;
  while (displayValue>0){
    if(displayValue%2!=0)
      count++;
  displayValue=Math.floor(displayValue/2);
  }
  return count;
}
