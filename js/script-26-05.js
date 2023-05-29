//======================

// Напишіть наступні функції:
// // createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// // logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// // logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   // callback(product);
//   console.log(callback);
// }

// function logProduct(goods) {
//   console.log(goods);
// }

// function logTotalPrice({ quantity, price }) {
//   console.log(quantity * price);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

//======================
// //В об'єкта account є методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError),
// //де перший параметр це сума операції, а другий та третій - коллбеки.
// //Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.
// //Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 1000,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError('perevysheno limit');
//       console.log(onError);
//     } else if (amount > this.balance) {
//       onError('nedostatno na rahunku');
//     } else {
//       this.balance -= amount;
//       onSuccess(`na rahunku ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError('perevysheno limit');
//     } else if (amount <= 0) {
//       onError('summ maje buty bilshe 0');
//     } else {
//       this.balance += amount;
//       onSuccess(`na washomu rachunku ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//======================

//Створи стрілочну функцію logItems(), яка виводить в консоль елементи масива, зроби перебір за допомогою методу forEach().

// const logItems = (arr) => {
//   arr.forEach((el, idx, arr)=>{
//     console.log(idx +1, el)
//   })
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//===========================================

// const calсulateAverage = (...rest) => {
// //console.log(rest);
// let average = 0;
// rest.forEach(el => average += el);
// return average/rest.length;

// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// const calсulateAverage = (...rest) => {
// //console.log(rest);
// let average = 0;
// const result = rest.forEach((el, __, arr) => average += el);
// const result2 = rest.map(el => average + el);
// console.log(result2);
// return average/rest.length;

// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// ====================================================================

// Реалізувати функцію пошуку по товару, функція має повернути рядок в форматі назва товару + ціна
// функція приймає один параметр ID товару

// const instruments = [
//   {
//     id: 1,
//     img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
//     name: 'Молоток',
//     price: 150,
//   },
//   {
//     id: 2,
//     img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
//     name: 'Перфоратор',
//     price: 3000,
//   },
//   {
//     id: 3,
//     img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
//     name: 'Рівень',
//     price: 2000,
//   },
// ];

// function findTools(toolId) {
//   let message = 'not found';
//   instruments.forEach(({ id, name, price }) => {
//     if (id === toolId) {
//       //   console.log(name);
//       message = `${name}, ${price}`;
//       //   console.log(message);
//     }
//     console.log(name);
//   });
//   return message;
// }

// console.log(findTools(1));

// =====================================================================
