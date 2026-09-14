export class DiffieHellman {
  private p: number;
  private g: number;

  constructor(p: number, g: number) {
    if (p <= 1 || g <= 1 || g >= p)
      throw new Error();
    
    this.p = p;
    this.g = g;
  }

  public getPublicKey(privateKey: number): number {
    if (privateKey <= 1 || privateKey >= this.p)
      throw new Error();
    return (this.g ** privateKey) % this.p;
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    if (myPrivateKey <= 1 || myPrivateKey >= this.p)
      throw new Error();

    return (theirPublicKey ** myPrivateKey) % this.p;
  }
}