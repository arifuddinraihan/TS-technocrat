{
    // Access modifier

    class BankAccount {
        constructor(
            public readonly id: number,
            public name: string,
            private balance: number) { }

        addDeposit(amount: number) {
            this.balance = this.balance + amount;
            // return this.balance;
        }

        getBalance() {
            return this.balance;
        }

    }

    const goribManushAcccount = new BankAccount(895, "Arif", 20)
    // goribManushAcccount.balance = 0;
    goribManushAcccount.addDeposit(200);
    // goribManushAcccount.addDeposit(200);
    const myBalance = goribManushAcccount.getBalance();
    console.log(myBalance);
















    // End of code and scope
}