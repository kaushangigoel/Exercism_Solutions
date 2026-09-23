type Operator = "plus" | "minus" | "multiplied" | "divided";

type Operation = {
  operator: Operator;
  operand: number;
};

const operations: Record<
  Operator, (left: number, right: number) => number > = {
  plus: (left, right) => left + right,
  minus: (left, right) => left - right,
  multiplied: (left, right) => left * right,
  divided: (left, right) => left / right,
};

const isNumber = (token: string): boolean => {
  return /^-?\d+$/.test(token);
};

const isOperator = (token: string): token is Operator => {
  return (
    token === "plus" ||
    token === "minus" ||
    token === "multiplied" ||
    token === "divided"
  );
};

const parseOperation = (
  tokens: string[]
): readonly [Operation, string[]] => {
  const operator = tokens[0];

  // A number where an operator is expected.
  if (isNumber(operator)) 
    throw new Error("Syntax error");

  // An unknown word where an operator is expected.
  if (!isOperator(operator))
    throw new Error("Unknown operation");

  let operandIndex = 1;

  // multiplied by / divided by
  if (operator === "multiplied" || operator === "divided") {
    if (tokens[1] !== "by")
      throw new Error("Syntax error");

    operandIndex = 2;
  }

  const operand = tokens[operandIndex];

  if (operand === undefined || !isNumber(operand))
    throw new Error("Syntax error");

  return [{
      operator,
      operand: Number(operand),
    },
    tokens.slice(operandIndex + 1),
  ];
};

export const answer = (input: string) => {
  if (!/^What is\b/.test(input)) 
    throw new Error("Unknown operation");

  const expression = input
    .replace(/^What is\b/, "")
    .replace(/\?$/, "")
    .trim();

  if (!expression)
    throw new Error("Syntax error");

  const tokens = expression.split(/\s+/);

  if (!isNumber(tokens[0]))
    throw new Error("Syntax error");

  let result = Number(tokens[0]);
  let remaining = tokens.slice(1);

  while (remaining.length > 0){
    const [operation, rest] = parseOperation(remaining);

    result = operations[operation.operator](
      result, operation.operand );

    remaining = rest;
  }
  return result;
};