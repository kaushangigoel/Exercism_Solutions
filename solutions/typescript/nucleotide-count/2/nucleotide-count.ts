export function nucleotideCounts(dna: string): Record<string,number>{
  let expected :Record<string, number>={
  "A": 0,
  "C": 0,
  "G": 0,
  "T": 0
  };    

for (let char of dna){
  if(expected[char]==undefined)
    throw new Error("Invalid nucleotide in strand");
    expected[char]++;
}
return expected;
}
