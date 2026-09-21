export const answer = (input: string) => {
  let result = 0;

  const isWhatIs = /^What is\s*/.test(input);

  const parsed = input
    .replace(/^What is\s*/, '')
    .replace(/\bby\b/g, '')
    .replace(/\?$/, '')
    .trim()
    .split(/\s+/);

  // Empty expression: "What is?"
  if (!parsed[0])
    throw new Error("Syntax error");

  // First token must be a number
  if (!/^-?\d+$/.test(parsed[0])) {
    if (isWhatIs)
      throw new Error("Syntax error");
    
    throw new Error("Unknown operation");
  }

  // Just a number
  if (parsed.length === 1)
    return Number(parsed[0]);

  result = Number(parsed[0]);

  for (let i = 1; i < parsed.length; i += 2) {
    const operator = parsed[i];
    const operand = parsed[i + 1];

    // Missing operand
    if (operand === undefined) {
      if (operator === "plus" ||
        operator === "minus" ||
        operator === "multiplied" ||
        operator === "divided") 
        throw new Error("Syntax error");

      if (/^-?\d+$/.test(operator))
        throw new Error("Syntax error");
      
      throw new Error("Unknown operation");
    }

    // Operand must be a number
    if (!/^-?\d+$/.test(operand)) 
      throw new Error("Syntax error");

    const value = Number(operand);

    switch (operator) {
      case "plus":result += value;break;
      case "minus":result -= value;break;
      case "multiplied": result *= value;break;
      case "divided":result /= value;break;
      default:if (/^-?\d+$/.test(operator))
          throw new Error("Syntax error");
      
        throw new Error("Unknown operation");
    }
  }

  return result;
};