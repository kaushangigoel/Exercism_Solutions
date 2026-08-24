export function classify(num : number): string {
  let sum:number=0;
  if(num <=0)
    throw new Error("Classification is only possible for natural numbers.");
  if(num==1)
    return "deficient";
  
  for(let i=1;i*i<=num;i++)
    if(num % i ==0){
      sum+=i;
      //adding the pair factor
      const pair=num/i;
      if(pair!=num && pair!=i )
        sum+=num/i;
    }
  
 if(sum==num)
   return "perfect";
  else if (sum>num)
    return "abundant";
  else 
    return "deficient";
}
