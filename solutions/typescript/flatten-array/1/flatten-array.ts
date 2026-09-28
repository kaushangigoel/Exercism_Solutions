export function flatten(input: unknown[]): unknown[] {
  let result: unknown[] =[];
  for(let item of input){
    if(item == null)
      continue;
    if(Array.isArray(item))
      result.push(...flatten(item));
    else
      result.push(item);
  }
  return result;
}
