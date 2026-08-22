export class Anagram {
  private input:string;
  private normalisedInput:string;
  constructor(input: string) {
    this.input=input.toLowerCase();
    this.normalisedInput=input.toLowerCase().split('').sort().join('');
  }

  public matches(...potentials: string[]): Set<string> {
    let anagram = new Set<string>();
    for (let potential of potentials) {
      if(potential.toLowerCase()==this.input)
        continue;
      let normalisedPotential = potential.toLowerCase().split('').sort().join('');
      if (this.normalisedInput==normalisedPotential)
        anagram.add(potential);
    }
    return anagram;
  } 
}
