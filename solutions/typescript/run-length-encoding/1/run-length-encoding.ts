export function encode(str: string): string {
  let output:string="";
  let count=1;
    for (let i=0;i<str.length;i++) {
      if(str[i]==str[i+1])
        count++;
      else {
        if(count>1)
          output+=count;
        output+=str[i];
        count=1;
      } 
  }
  return output;
}

export function decode(str: string): string {
  let output = "";
  let count = "";

  for (let char of str) {
    if (/[0-9]/.test(char)) {
      count += char;
    } else {
      let repetitions = count === "" ? 1 : Number(count);
      for (let i = 0; i < repetitions; i++) {
        output += char;
      }
      count = "";
    }
  }
  return output;
}
