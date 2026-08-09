export function squareRoot(radicand: number): number {
//Binary Search
  let left=1;
  let right=radicand;

  if (radicand==1)
      return 1;

  while(left<=right){
    let mid=Math.floor((left+right)/2);
    if(mid*mid==radicand)
      return mid;
    if(mid*mid<radicand)
      left=mid+1;
    else
      right=mid-1;   
  }
  throw new Error("Not a perfect square");
}
