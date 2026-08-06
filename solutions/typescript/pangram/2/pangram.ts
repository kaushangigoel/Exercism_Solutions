export function isPangram(str:string) : boolean{
  const string=str.toLowerCase();
  let alphabets: string="abcdefghijklmnopqrstuvwxyz";
  for (let c of alphabets)
    if(!string.includes(c))
      return false;
  return true;
}
