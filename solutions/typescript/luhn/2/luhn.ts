export function valid(input: string): boolean {
  let sum = 0;
  let digitCount = 0;
  let shouldDouble = false;

  for (let index = input.length - 1; index >= 0; index--) {
    const character = input[index];

    if (character === ' ') {
      continue;
    }

    if (character < '0' || character > '9') {
      return false;
    }

    let digit = Number(character);

    if (shouldDouble) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    digitCount++;
    shouldDouble = !shouldDouble;
  }

  return digitCount > 1 && sum % 10 === 0;
}