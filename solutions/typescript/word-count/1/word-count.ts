export function count(str:string): Map<string,number> {
  let word_count = new Map<string, number>();
  let words: string[]= str.match(/[a-z0-9]+(?:'[a-z0-9]+)*/gi) ?? [];
  for (let word of words){
    word = word.toLowerCase();
    let current_count=word_count.get(word)??0;
    word_count.set(word,++current_count);
  }
return word_count;
}
