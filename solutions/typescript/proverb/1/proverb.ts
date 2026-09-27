export function proverb(...proverbs:string[]): string {
  let output="";
  for(let i=0; i< proverbs.length-1; i++){
    output+=`For want of a ${proverbs[i]} the ${proverbs[i+1]} was lost.\n`;
  }
  output+=`And all for the want of a ${proverbs[0]}.`;
  return output;
}
