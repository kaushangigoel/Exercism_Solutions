export function isPaired(input: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of input) {
    // Opening bracket
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }

    // Closing bracket
    if (char in pairs) {
      const last = stack.pop();

      if (last !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
