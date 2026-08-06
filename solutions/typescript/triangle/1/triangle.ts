export class Triangle {
  private side: number[];
  
  constructor(...sides: number[]) {
    this.side = sides;
  }
  get isValid(): boolean{
    const [a,b,c]=this.side;
    return (a>0 && b>0 && c>0 &&
            a+b >= c &&
            b+c >= a &&
            c+a >=b);
  }

  get isEquilateral() {
    if(!this.isValid)
      return false;
    if(this.side[0]==this.side[1] && this.side[1] == this.side[2])
      return true;
    else
      return false;
  }

  get isIsosceles() {
     if(!this.isValid)
      return false;
    if(this.side[0]==this.side[1] || 
       this.side[1] == this.side[2] ||
       this.side[0] == this.side[2])
        return true;
    else
      return false;
  }

  get isScalene() {
     if(!this.isValid)
      return false;
    if(this.side[0]!=this.side[1] && 
       this.side[0]!=this.side[2] &&
      this.side[1]!=this.side[2])
        return true;
    else
      return false;
  }
}
