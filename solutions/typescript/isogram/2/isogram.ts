export function isIsogram(str:string): boolean {
   // Convert to lowercase and remove non-letter characters,
  // then check if the number of unique letters equals the
  // total number of letters. If they are equal, no letter repeats.
  const cleanStr=str.toLowerCase().replace(/[^a-z]/g,'');
  return cleanStr.length == new Set(cleanStr.split('')).size;
}
