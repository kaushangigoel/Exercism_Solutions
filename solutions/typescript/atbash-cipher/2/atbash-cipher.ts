export function encode(plainText: string): string {
  let encoded="";
  let count =0;
  for(let char of plainText.toLowerCase().replace(/[^a-z\d]/g,'')){
    if(char>='a' && char<='z')
     encoded+= String.fromCharCode(
          'z'.charCodeAt(0) - (char.charCodeAt(0) - 'a'.charCodeAt(0)));
    else
      encoded +=char;
    count++;
    if(count % 5 == 0)
      encoded += " ";
  }
  return encoded.trim();
}

export function decode(cipherText: string): string {
  return encode(cipherText).replace(/\s/g,'');
}
