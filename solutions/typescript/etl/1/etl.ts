export function transform(old: {[key: string]: string[]}): {[key: string]: number} {
  let transformed :{[key: string]: number}={};
  for (let score in old){
    for (let char of old[score]){
      transformed[char.toLowerCase()]= Number(score);
    }
  }
  return transformed;
}
