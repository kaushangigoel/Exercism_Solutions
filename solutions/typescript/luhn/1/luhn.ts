export function valid(digitString: string): boolean {
  let sum=0;
  if(!/^[\d\s]+$/.test(digitString))
    return false;
  
  digitString=digitString.replace(/\s/g,'');
  
  if(digitString.length<=1)
    return false;
  
  for(let i=digitString.length-1, j=1;i>=0;i--){
    if(j++ % 2 == 0){
      let doubleVal=Number(digitString[i])*2;
     sum+= doubleVal>9 ? doubleVal-9 : doubleVal;
    }
    else
      sum+=Number(digitString[i]);
    
  }
  return (sum%10==0);
  
}
