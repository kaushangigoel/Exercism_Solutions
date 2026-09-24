
export function steps(count: number): number {
  let step=0;
  if(count<=0 || count%1 !=0)
    throw new Error("Only positive integers are allowed");
  while(count>1){
    count = count%2==0 ? count/2 : (count*3 +1);
    step++;
  }
  return step;
}
