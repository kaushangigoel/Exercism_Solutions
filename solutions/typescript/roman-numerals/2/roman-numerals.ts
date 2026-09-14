const thousands = ["", "M", "MM", "MMM"];

const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC",  "CM"];

const tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];

const ones = ["","I","II","III","IV","V","VI","VII","VIII","IX"];

export const toRoman = (numeric: number): string => {
  const thousand = thousands[Math.floor(numeric / 1000)];

  const hundred = hundreds[Math.floor((numeric % 1000) / 100)];

  const ten = tens[Math.floor((numeric % 100) / 10)];

  const one = ones[numeric % 10];

  return thousand + hundred + ten + one;
};