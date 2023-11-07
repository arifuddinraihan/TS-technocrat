{
  // Access modifier

  class BankAccount {
    constructor(
      public readonly id: number,
      public name: string,
      // private _balance: number, // **Private** to use when no one can access the property 
      protected _balance: number, // **Private** to use when no one can access the property 
    ) {}

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
      // return this.balance;
    }

    getBalance() {
      return this._balance;
    }
  }

  const goribManushAcccount = new BankAccount(895, "Arif", 20);

  // goribManushAcccount.balance = 0;
  goribManushAcccount.addDeposit(200);
  
  // goribManushAcccount.addDeposit(200);
  const myBalance = goribManushAcccount.getBalance();
  
  console.log(myBalance);

  // demo class to check if we get **Protected** properties from parent class
  class StudentAccount extends BankAccount {
    // test(){
    //   this. 
    // }
  }

  // End of code and scope
}
