class account {
  #bal;

  constructor(initBal) {
      this.#bal = initBal;
  }

  deposit(amt) {
      if (amt > 0) {
          this.#bal += amt;
          console.log(`deposited: ${amt}`);
      } else {
          console.log('deposit amount must be positive');
      }
  }

  withdraw(amt) {
      if (amt > 0 && amt <= this.#bal) {
          this.#bal -= amt;
          console.log(`withdrew: ${amt}`);
      } else {
          console.log('invalid withdraw amount');
      }
  }

  getbal() {
      console.log(`current balance: ${this.#bal}`);
      return this.#bal;
  }
}

function main() {
  const acc = new account(100);
  acc.getbal();

  acc.deposit(50);
  acc.getbal();

  acc.withdraw(30);
  acc.getbal();

  acc.withdraw(150);
  acc.getbal();
}

main();
