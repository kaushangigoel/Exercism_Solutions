export function decodedResistorValue(colours: string[]): string {
  const exponential=COLORS.indexOf(colours[2]);
  
    let resistance =COLORS.indexOf(colours[0])*10**(exponential+1) +
    COLORS.indexOf(colours[1])*10**(exponential) ;

  if (resistance>=10**9)
    return(resistance/10**9+ " gigaohms");
  else if (resistance>=10**6)
    return(resistance/10**6+ " megaohms");
  else if (resistance>=10**3)
    return(resistance/10**3 +" kiloohms");
  else
  return(resistance+" ohms");
  
  
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