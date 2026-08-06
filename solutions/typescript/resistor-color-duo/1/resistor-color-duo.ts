export function decodedValue(colours: string[]): number {
  return (COLORS.indexOf(colours[0])*10+COLORS.indexOf(colours[1]));
}

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];
