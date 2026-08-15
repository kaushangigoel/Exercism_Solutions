export function isArmstrongNumber(number: number | bigint): boolean {
  let num = BigInt(number);
  let count = 0;
  let output = 0n;
  while (num > 0n) {
    count++;
    num = num / 10n;
  }
  num = BigInt(number);
  while (num > 0n) {
    output += (num % 10n) ** BigInt(count);
    num = num / 10n;
  }
  return output === BigInt(number);
}