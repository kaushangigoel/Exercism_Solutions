export function squareRoot(radicand: number): number {
// Newton's method (Heron's method) repeatedly improves an initial guess
// for the square root of n using:
//     nextGuess = (guess + n / guess) / 2
//
// The new guess is the average of the current guess and n divided by
// the current guess. Repeating this converges quickly toward sqrt(n).

  let guess=radicand;
  while (guess*guess!=radicand){
    guess = (guess + radicand / guess) / 2;
  }
  return guess;
}
