export function isPangram(str:string) : boolean{
  const string=str.toLowerCase();
  let set=new Set<string>();
  for (let c of string)
    if(c>='a' && c<='z')
      set.add(c);

if (set.size==26)
  return true;
else
  return false;
}
