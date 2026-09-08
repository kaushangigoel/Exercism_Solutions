export function nucleotideCounts(dna: string): Record<string,number>{
  let expected :Record<string, number>={
  "A": 0,
  "C": 0,
  "G": 0,
  "T": 0
  };

  if (dna.length==0)
    return expected;
  else if(!/^[ACGT]+$/.test(dna))
    throw new Error("Invalid nucleotide in strand");

for (let char of dna)
    expected[char]++;

return expected;
}
