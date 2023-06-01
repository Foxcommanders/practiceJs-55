// ====================================================================
// // Напиши клас Client який створює об'єкт з властивостями login i email.Оголоси приватні властивості #login #email, доступ до яких зроби через геттер і сеттер login/email

// // Що буде у консолі?
// const parent = {
//   name: 'Luce',
//   age: 35,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);
// // console.log(child);
// child.name = 'Bob';
// child.age = 7;

// const child2 = Object.create(child);
// console.log(child2);
// console.log(child2.name);
// console.log(child2.heritage);

// // console.log(child.name); // ?  Bob
// // console.log(child.age); // ? 7
// // console.log(child.heritage); // ? irish

// ====================================================================

// // Напиши клас Client який створює об'єкт з властивостями login i email.
// // Оголоси приватні властивості #login #email,
// // доступ до яких зроби через геттер і сеттер login / email
// class Client {
//   #login;
//   #email;

//   constructor(newLogin, newEmail, newName) {
//     this.name = newName;
//     this.#login = newLogin;
//     this.#email = newEmail;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     if (newLogin) {
//       this.#login = newLogin;
//       return;
//     }
//     console.log('Error!');
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     if (newEmail) {
//       this.#email = newEmail;
//       return;
//     }
//     console.log('Error!');
//   }
//   get nameClient() {
//     return this.name;
//   }
//   set nameClient(newName) {
//     if (newName) {
//       this.name = newName;
//       return;
//     }
//     console.log('Error!');
//   }
// }
// const mango = new Client('mango_log', 'mango@gmail.com', 'Mango');
// console.log(mango);
// // mango.#email = ''; // error
// mango.email = 'new@gmail.com';
// mango.name = '';
// console.log(mango);
// console.log(mango.name); // get
// mango.name = 'Mango2'; //set
// console.log(mango.name);

// ====================================================================

// Напиши клас Client який створює об'єкт з властивостями login i email.Створити статичний метод і властивість підрахунку клієнтів підч час їх створення

// class Client {
//   static total = 0;
//   static addClient() {
//     this.total += 1;
//   }
//   constructor(newLogin, newEmail) {
//     this.login = newLogin;
//     this.email = newEmail;

//     Client.addClient();
//   }
// }

// const mango = new Client("Mango", "mango@gmail.com");
// console.log(Client.total);

// ====================================================================

// User;
// email;
// password;
// email;

// Human;
// damage;

// Elf;
// mana;

class User {
  constructor(newName, newPassword, newEmail) {
    this.name = newName;
    this.password = newPassword;
    this.email = newEmail;
  }

  changeName(newName) {
    if (newName && newName.length >= 3) {
      this.name = newName;
    }
  }
}

class Human extends User {
  constructor(newName, newPassword, newEmail, damage) {
    super(newName, newPassword, newEmail);
    this.damage = damage;
  }

  attack() {
    console.log(`${this.name} attacked with ${this.damage}`);
  }
}

class Elf extends User {
  constructor(newName, newPassword, newEmail, mana) {
    super(newName, newPassword, newEmail);
    this.mana = mana;
  }

  spell() {
    console.log(`AVADAKEDAVRA spell cost ${this.mana}`);
  }
}

const Max = new Human('Max', '123', 'max@gmail.com', '200');
const Legolas = new Elf('Legolas', '324', 'leg@gmail.com', '350');
console.log(Legolas);
Max.changeName('Alex');
console.log(Max);
