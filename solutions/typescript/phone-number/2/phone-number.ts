export function clean(num: string): string {
  if (/[a-z]/i.test(num))
    throw new Error("Letters not permitted");

  if (/[^\d\s().+-]/.test(num))
    throw new Error("Punctuations not permitted");

  let digits = num.replace(/[\s().+-]/g, "");

  if (digits.length < 10)
    throw new Error("Must not be fewer than 10 digits");

  if (digits.length > 11)
    throw new Error("Must not be greater than 11 digits");

  if (digits.length === 11) {
    if (digits[0] !== "1") 
      throw new Error("11 digits must start with 1");
    digits = digits.slice(1);
  }

  if (digits[0] === "0" || digits[0] === "1")
    throw new Error( digits[0] === "0"
        ? "Area code cannot start with zero"
        : "Area code cannot start with one");

  if (digits[3] === "0" || digits[3] === "1")
    throw new Error( digits[3] === "0"
        ? "Exchange code cannot start with zero"
        : "Exchange code cannot start with one");

  return digits;
}