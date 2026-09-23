type Operation = {operator: string; operand: number;};

const operations: Record<string, (left: number, right: number) => number> = {
  plus: (left, right) => left + right,
  minus: (left, right) => left - right,
  multiplied: (left, right) => left * right,
  divided: (left, right) => left / right,
};

const isNumber = (token: string) => /^-?\d+$/.test(token);

const parseOperation = (tokens: string[]): [Operation, string[]] => {
  const operator = tokens[0];

  // A number where an operator is expected
  // is a syntax error.
  if (isNumber(operator))
    throw new Error("Syntax error");

  // An unknown word where an operator is expected
  // is an unknown operation.
  if (!(operator in operations))
    throw new Error("Unknown operation");

  // "plus", "minus", etc. need an operand.
  if (tokens.length < 2)
    throw new Error("Syntax error");

  let operandIndex = 1;

  // "multiplied by" and "divided by"
  // require the word "by".
  if (operator === "multiplied" || operator === "divided") {
    if (tokens[1] !== "by")
      throw new Error("Syntax error");
    operandIndex = 2;
  }

  // Missing or invalid operand.
  if (tokens.length <= operandIndex || !isNumber(tokens[operandIndex]))
    throw new Error("Syntax error");

  return [ {operator, operand: Number(tokens[operandIndex]),}, tokens.slice(operandIndex + 1),];
};

export const answer = (input: string) => {
  // The question must start with "What is".
  if (!/^What is\b/.test(input))
    throw new Error("Unknown operation");

  const expression = input
    .replace(/^What is\b/, "")
    .replace(/\?$/, "")
    .trim();

  // "What is?"
  if (!expression)
    throw new Error("Syntax error");

  const tokens = expression.split(/\s+/);

  // First token must be a number.
  if (!isNumber(tokens[0]))
    throw new Error("Syntax error");

  let result = Number(tokens[0]);
  let remaining = tokens.slice(1);

  while (remaining.length > 0) {
    const [operation, rest] = parseOperation(remaining);

    result = operations[operation.operator](result, operation.operand );
    remaining = rest;
  }
  return result;
};