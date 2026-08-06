export function reverse(str: string) : string{
  let rev: string ="";
  for (let c of str){
    rev= c+ rev;
  }
  return rev;
}
