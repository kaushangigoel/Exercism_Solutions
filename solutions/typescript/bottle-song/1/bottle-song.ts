const numbers = [
  "no",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

const getBottleText = (count: number): string => {
  if (count === 1) 
    return "bottle";
  return "bottles";
};

export const recite = (
  initialBottleCount: number,
  takeDownCount: number ): string[] => {
  const result: string[] = [];

  for (let i = 0; i < takeDownCount; i++) {
    const current = initialBottleCount - i;
    const next = current - 1;

    const currentNumber = numbers[current];
    const nextNumber = numbers[next];

    const currentCapitalized =
      currentNumber[0].toUpperCase() + currentNumber.slice(1);

    result.push(
      `${currentCapitalized} green ${getBottleText(current)} hanging on the wall,`,
      `${currentCapitalized} green ${getBottleText(current)} hanging on the wall,`,
      `And if one green bottle should accidentally fall,`,
      `There'll be ${nextNumber} green ${getBottleText(next)} hanging on the wall.`
    );

    // Add blank line between verses, but not after final verse
    if (i < takeDownCount - 1)
      result.push("");
  }

  return result;
};
