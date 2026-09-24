const scores: Record<string, string> = {
  1: "AEIOULNRST",
  2: "DG",
  3: "BCMP",
  4: "FHVWY",
  5: "K",
  8: "JX",
  10: "QZ",
};

function findScore(letter: string): number {
  for (const score in scores) {
    if (scores[score].includes(letter)) 
      return Number(score);
  }
  return 0;
}

export function score(word: string): number {
  let total = 0;
  if(!word) return 0;

  for (const letter of word.toUpperCase()) 
    total += findScore(letter)
  return total;
}