const aminoacid : Record<string,string>={
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan"
}

export function translate(rna: string): string[] {
  let rnaParts: string[]= [];
  for (let index = 0; index < rna.length; index+=3) {
    rnaParts.push(rna.slice(index,index+3));
  }
  let amino:string[] =[];
  for (let part of rnaParts) {
    if(part=='UAA'||part=='UAG'||part=='UGA')
      return amino;
    if (!(part in aminoacid)) {
      throw new Error("Invalid codon");
    }
    amino.push(aminoacid[part]);  
  }
  return amino;
}
