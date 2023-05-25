//======================
// const user = {
//   name: "Den",
//   age: 43,
//   skills: {
//     html: true,
//     css: true,
//     js: true,
//   },
// };

// const copy = { ...user };
// copy.name = "Max";
// // copy.skills.js = false;
// console.log(user);
// console.log(copy);
// // JSON.parse(JSON.stringify())
// // Object.assign()

// //https://uk.javascript.info/recursion

// //Єдиний метод без використання бібліотек для ПОВНОГО клонування масиву
// function copyArr(arr) {
//   let res = [];
//   for (let i in arr) {
//     res.push(arr[i]);
//   }
//   return res;
// }
// //Єдиний метод без використання бібліотек для ПОВНОГО клонування об'єкту
// function copyObj(obj) {
//   const res = {};
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       if (obj[key].length !== undefined) {
//         res[key] = copyArr(obj[key]);
//       } else {
//         res[key] = copyObj(obj[key]);
//       }
//     } else {
//       res[key] = obj[key];
//     }
//   }
//   return res;
// }

// const deepClone = copyObj(user);
// console.log(deepClone);

// deepClone.skills.js = false;

//======================

// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName. Викоритовуй rest оператор.
// //==================================================rest====
// function transformUsername({ firstName, lastName, ...args }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     //===spread==
//     ...args,
//   };
// }
// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//   })
// );
// const user = {
//   id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
// }
// //=============================rest===(під час параметрів)
// const {firstName, lastName, ...props} = user;
// //===============spread===============(під час аргументів)
// const user2 = {...props};

//======================

// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"
// 2 Порахувати вік всіх юзерів у яких є ключ age.
// const friends = [{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
//     { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"], age: 26},
// ]

//======================

// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга (“Harry Potter”) \\\ “Anna, Oleksii”
// 2 Порахувати вік всіх юзерів у яких є ключ age.
// const friends = [
//   { name: “Anna”, books: [“Bible”, “Harry Potter”], age: 21 },
//   { name: “Bob”, books: [“War and peace”, “Romeo and Juliet”], age: 26 },
//   { name: “Alice”, books: [“War and peace”, “Romeo and Juliet”] },
//   {
//     name: “Oleksii”,
//     books: [“Bible”, “War and peace”, “Harry Potter”, “Romeo and Juliet”],
//     age: 26,
//   },
// ];
// function sum(arr) {
//   let total = 0;
//   for (let { age } of arr) {
//     if (age) {
//       total += age;
//     }
//   }
//   return total;
// }
// console.log(sum(friends));
// function getUsers(arr, bookName) {
//   let users = [];
//   for (let { name, books } of arr) {
//     if (books.includes(bookName)) {
//       users.push(name);
//       console.log(users);
//     }
//   }
//   return users.join(“, “);
// }
// console.log(getUsers(friends, “Harry Potter”));

//======================

// // Потрібно створити функцію яка буде приймати 2 параметри
// // 1  значення від якої суми робити пошук
// // 2  значення до якої суми робити пошук
// // Повертає список автомобілів які підпадають під наш пошук

// const cars = [
//   {
//     model: 'Honda',
//     type: 'Civic',
//     price: 12000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
//   },
//   {
//     model: 'Audi',
//     type: 'Q7',
//     price: 40000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
//   },
//   {
//     model: 'BMW',
//     type: '5 siries',
//     price: 9000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
//   },
//   {
//     model: 'Honda',
//     type: 'Accord',
//     price: 20000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
//   },
//   {
//     model: 'Volvo',
//     type: 'XC60',
//     price: 7000,
//     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
//   },
// ];

// function search(start, end) {
//   let modelCars = [];
//   for (const { price, model, type } of cars) {
//     if (price >= start && price <= end) {
//       modelCars.push(`${model} ${type}`);
//     }
//   }
//   return modelCars;
// }
// console.log(search(5000, 10000));

//======================
