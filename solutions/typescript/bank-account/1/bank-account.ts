export class ValueError extends Error {
  constructor() {
    super('Bank account error')
  }
}

export class BankAccount {
  private _balance: number =0;
  private opened: boolean = false;
  
  constructor() {
    this._balance=0;
  }

  open(): void {
    if(this.opened)
      throw new ValueError();
    this.opened = true;
    this._balance=0;
  }

  close(): void {
    if(!this.opened)
      throw new ValueError();
    this.opened = false;
  }

  deposit(amount: number) {
    if(!this.opened || amount<=0)
      throw new ValueError();
    
    this._balance+=amount;
  }

  withdraw(amount: number) {
    if(!this.opened || amount<=0 || amount>this._balance)
      throw new ValueError();
    this._balance-=amount;
  }

  get balance(): number {
    if(!this.opened)
      throw new ValueError();
    return this._balance;
  }
}
