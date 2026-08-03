class User {
  constructor(name, age, balance) {
    this.name = name;
    this.age = age;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient Balance");
      return;
    }

    this.balance -= amount;
  }

  get balanceValue() {
    return this.balance;
  }
}

class Begger extends User {
  constructor(name, age, work) {
    // Call parent constructor
    super(name, age, 0);

    this.work = work;

    // Call parent method
    super.deposit(45);
  }
}

// Parent object
const user1 = new User("Sahil", 22, 1000);

console.log("User:", user1);

user1.deposit(500);
console.log("After Deposit:", user1);

user1.withdraw(300);
console.log("After Withdraw:", user1);

console.log("Balance:", user1.balanceValue);

// Child object
const begger1 = new Begger("Rahul", 30, "Street Performer");

console.log("Begger:", begger1);

console.log("Balance:", begger1.balanceValue);
