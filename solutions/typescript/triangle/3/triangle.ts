export class Triangle {
  readonly isEquilateral: boolean;
  readonly isIsosceles: boolean;
  readonly isScalene: boolean;
  
  constructor(...sides: number[]) {
    const [a, b, c]    = sides.sort((x,y)=>x-y);
    const isValid      = a + b > c;
    const uniqueSides  = new Set(sides).size;
    this.isEquilateral = isValid && uniqueSides == 1;
    this.isIsosceles   = isValid && uniqueSides <=  2;
    this.isScalene     = isValid && uniqueSides == 3;
  }
}