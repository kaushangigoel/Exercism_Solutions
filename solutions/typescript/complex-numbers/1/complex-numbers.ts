export class ComplexNumber {
  private _real: number;
  private _imaginary: number;
  constructor(real: number, imaginary: number) {
    this._real=real;
    this._imaginary=imaginary;
  }

  public get real(): number {
    return this._real;
  }

  public get imag(): number {
    return this._imaginary;
  }

  public add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this._real+other.real, this._imaginary+ other.imag);
  }

  public sub(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this._real-other.real, this._imaginary-other.imag);
  }

  public div(other: ComplexNumber): ComplexNumber {
    const denominator= (other.real**2 + other.imag**2);
    return new ComplexNumber(
      (this._real*other.real + this._imaginary*other.imag)/denominator,
      (this._imaginary*other.real - this._real*other.imag)/denominator
    );
  }

  public mul(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this._real*other.real- this._imaginary*other.imag,
           this._imaginary*other.real +this._real*other.imag);
  }

  public get abs(): number {
    return ((this._real**2 + this._imaginary**2)**0.5);
  }

  public get conj(): ComplexNumber {
    return new ComplexNumber(this._real, 0-this._imaginary);
  }

  public get exp(): ComplexNumber {
    const expreal = Math.exp(this._real);
    return new ComplexNumber(expreal* Math.cos(this._imaginary),
                             expreal* Math.sin(this._imaginary));
  }
}
