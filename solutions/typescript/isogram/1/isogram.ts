export function isIsogram(str:string): boolean {
  //loop each character against all the characters
  for (let c of str){
    let count: number=0;
    for (let char of str) {
      if(c.toLowerCase()==char.toLowerCase())
        count++;      
    }
    if(count>1 && c!='-' && c!=' ')
      return false;
  }
  return true;
}
