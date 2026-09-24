
const squares=64n;
export const square = (num: number) => {
  if(num<=0 || num >64)
    throw new Error();
  return 2n ** BigInt(num-1);
}

export const total = () => {
// Each square doubles the grains, giving a geometric series:
// 1 + 2 + 4 + ... + 2^63
// Sum = 2^64 - 1
  return 2n ** squares- 1n;
}
