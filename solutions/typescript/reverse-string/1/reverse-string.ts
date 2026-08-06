export function reverse(str: string) : string{
  let rev: string ="";
  for(let i:number=str.length;i>0;i--){
    rev+=str[i-1];
  }
  return rev;
}
