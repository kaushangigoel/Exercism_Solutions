export function parse(phrase: string): string {
  let words=phrase.split(/[\s-]+/);
  let acronym="";
  for (let word of words) {
    const cleanWord = word.replace(/[^A-Za-z]/g, "");
    const letters = cleanWord.match(/[A-Z]/g);
    if (letters){
      if(letters.join("")==cleanWord){
        acronym+=cleanWord;
        break;
      }
      acronym += letters.join("");
    }
   else if (letters === null)
      acronym += cleanWord[0];
  }
  return acronym.toUpperCase();
  
}
