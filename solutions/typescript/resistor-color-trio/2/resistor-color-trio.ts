const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

const UNITS = [
  { value: 10 ** 9, name: 'gigaohms' },
  { value: 10 ** 6, name: 'megaohms' },
  { value: 10 ** 3, name: 'kiloohms' },
  { value: 1, name: 'ohms' },
];

export function decodedResistorValue(colours: string[]): string {
  const firstDigit = COLORS.indexOf(colours[0]);
  const secondDigit = COLORS.indexOf(colours[1]);
  const multiplier = COLORS.indexOf(colours[2]);
  
  const resistance = (firstDigit * 10 + secondDigit) * 10 ** multiplier;
    if (resistance === 0)
      return '0 ohms';
  const unit = UNITS.find(({ value }) => resistance >= value)!;

  return `${resistance / unit.value} ${unit.name}`;
}