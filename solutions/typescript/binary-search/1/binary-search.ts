export function find(haystack: number[], needle: number): number | never {
  let left:number = 0;
  let right:number = haystack.length;
  let pivot: number=0;
  while(left<=right){
    pivot = Math.floor((left+right)/2); 
    if(haystack[pivot] == needle)
      return pivot;
    else if(haystack[pivot] < needle)
      left=pivot+1;
    else 
      right=pivot-1;
    }
  throw new Error('Value not in array');
}
