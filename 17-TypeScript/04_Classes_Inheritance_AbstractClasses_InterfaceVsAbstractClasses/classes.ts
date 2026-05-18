class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const alice = new User('Alice', 25);
const bob = new User('Bob', 30);

// READONLY AND OPTIONAL PROPERTIES

class Book {
  readonly title: string;
  author?: string;

  constructor(title: string, author?: string) {
    this.title = title;
    this.author = author;
  }
}

const myBook = new Book('A Bear Called Paddington', 'Michael Bond');
const book = new Book('new book title');

// myBook.author = 'Somenone else';
// myBook.title = 'something';
// console.log(myBook);

// console.log(book.author ?? 'no author');

// ACCESS MODIFIERS => CONTROLL WHO SEES WHAT?
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance; // controlled access => we can read, but not write
  }
}

const account = new BankAccount(1000);
account.deposit(500);

console.log(account.getBalance());

// console.log(account.balance);
