{
  // OOP concept --> Getter & Setters

  class BankAccount {
    constructor(
      public readonly id: number,
      public name: string,
      protected _balance: number
    ) {}

    // ***Setter Function
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // ***Getter Function
    get balance() {
      return this._balance;
    }

    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goribManushAcccount = new BankAccount(895, "Arif", 20);

  // *** Usage of Getter Function as property
  goribManushAcccount.deposit = 200; // ***Now I can call [SETTER] function like property
  // goribManushAcccount.addDeposit(200); // Before, i need to call-function for getting the balance

  // *** Usage of Getter Function as property
  const myBalance = goribManushAcccount.balance; // ***Now I can [GETTER] call function like property
  // const myBalance = goribManushAcccount.getBalance(); // Before, i need to call function for getting the balance

  console.log(myBalance);

  // End of code and scope
}
