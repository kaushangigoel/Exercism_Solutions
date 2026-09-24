export class Rational {
   public numerator: number;
   public denominator: number;
  
  constructor(n: number, d: number) {
    this.numerator=n;
    this.denominator=d;
  }

  add(other: Rational): Rational {
    const a = this.numerator * other.denominator + 
              other.numerator * this.denominator;
    const b = this.denominator * other.denominator;
    return new Rational(a, b).reduce();
  }

  sub(other: Rational): Rational {
    const a = this.numerator * other.denominator - 
              other.numerator * this.denominator;
    const b = this.denominator * other.denominator;
    return new Rational(a, b).reduce();
  }

  mul(other: Rational): Rational  {
    const a = this.numerator * other.numerator;
    const b = this.denominator * other.denominator;
    return new Rational(a, b).reduce();
  }

  div(other: Rational): Rational {
    const a = this.numerator * other.denominator;
    const b = this.denominator * other.numerator;
    return new Rational(a, b).reduce();
  }

  abs(): Rational {
    return new Rational( Math.abs(this.numerator), Math.abs(this.denominator)).reduce();
  }

  exprational(power: number): Rational {
  if (power >= 0)
    return new Rational(
      this.numerator ** power,
      this.denominator ** power
    ).reduce();

  return new Rational(
    this.denominator ** Math.abs(power),
    this.numerator ** Math.abs(power)
  ).reduce();
}

  expreal(base: number): number {
    return base ** (this.numerator / this.denominator);
  }

  reduce(): Rational {
    if (this.numerator === 0)
      return new Rational(0, 1);
    
    const divisor = this.gcd(this.numerator,this.denominator);

    let numerator = this.numerator / divisor;
    let denominator = this.denominator / divisor;

    if (denominator < 0) {
      numerator = -numerator;
      denominator = -denominator;
    }
    return new Rational(numerator, denominator);
  }

  private gcd(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
}
