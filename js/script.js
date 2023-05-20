// Напишіть код, який очищає масив від небажаних значень, таких як false undefined, пусті рядки, нуль, null.
// function filterArray(arr){
//     ...
// }
// console.log(filterArray([0, 1, false, 2, undefined, '', 3, null])) // [1, 2, 3]
// console.log(filterArray([NaN, 0, 15, false, -22, '',undefined, 47, null])) // [15, -22, 47]

// false, 0, NaN, '', undefined, null;

// function filterArray(arr) {
//   const result = [];
//   for (let item of arr) {
//     if (!!item) {
//       result.push(item);
//     }
//   }
//   return result;
// }
// const items = [0, 1, false, 2, undefined, '', 3, null];
// filterArray([0, 1, false, 2, undefined, '', 3, null]);

// console.log(filterArray(items)); // [1, 2, 3]
// console.log(filterArray([NaN, 0, 15, false, -22, '', undefined, 47, null])); // [15, -22, 47]

//======================

//Напишіть код, який поверне суму рядка
// function digitSum(data){
//     ...
// }
// console.log(digitSum('4367')) // 20
// console.log(digitSum('56349')) // 27

// function digitSum(data){
//     const numbers = data.split("");
//     let num = 0;
//     for (let elem of numbers) {
//          num += Number(elem);
//     }
//     return num;

// }
// console.log(digitSum('4367')) // 20
// console.log(digitSum('56349')) // 27

//======================

// Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.
//0     1    2     3    4     5
// const names = ['Anna', 3, 'Roma', 17, 25, 'Kate', 14, 'Oleg'];
// for (let i = names.length - 1; i >= 0; i -= 1) {
//   if (typeof names[i] !== 'string') {
//     names.splice(i, 1);
//   }
// }
// // Варіант №2
// // for (let i = 0; i < names.length; i += 1){
// //     if (typeof names[i] !== 'string') {
// //         names.splice(i, 1);
// //         i -= 1;  // зменшуємо індекс, бо змінилася індексація в масиві
// //     }
// // }
// console.log(names);

//======================

// Створити код який буде повертати масив з жіночими іменамиі
// const users = [
//   'Artem',
//   'Anna',
//   'Larisa',
//   'Maksim',
//   'Svetlana',
//   'David',
//   'Roman',
//   'Olga',
// ];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

//======================

// Створити код який буде повертати масив з жіночими іменами

// const users = [
//   'Artem',
//   'Anna',
//   'Larisa',
//   'Maksim',
//   'Svetlana',
//   'David',
//   'Roman',
//   'Olga',
// ];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

// const women = [];

// for (let el of users) {
//   if (!men.includes(el)) {
//     console.log(el);
//     women.push(el);
//   }
// }
// console.log(women);

//======================

// //Створіть функцію, яка приймає 1 параметр
// //1 масив імен користувачів, які поставили лайки.
// //Функція повертає меседж, як вказано у прикладах:
// //Використовувати switch()

// function stringBuilder(users) {
//   let message;
//   switch (users.length) {
//     case 0:
//       message = 'no one likes this';
//       break;
//     case 1:
//       message = `${users[0]} likes this `;
//       break;
//     case 2:
//       message = `${users[0]} and ${users[1]} likes this `;
//       break;
//     case 3:
//       message = `${users[0]}, ${users[1]} and ${users[2]} likes this `;
//       break;
//     default:
//       message = `${users[0]}, ${users[1]} and ${
//         users.length - 2
//       } others like this`;
//   }
//   return message;
// }

// console.log(stringBuilder([])); //"no one likes this";
// console.log(stringBuilder(['Peter'])); //"Peter likes this";
// console.log(stringBuilder(['Max', 'Alex'])); //"Jacob and Alex like this";
// console.log(stringBuilder(['Max', 'John', 'Mark'])); //"Max, John and Mark like this";
// console.log(stringBuilder(['Alex', 'Jacob', 'Mark', 'Max', 'Igor', 'Leo'])); //"Alex, Jacob and 2 others like this;

function filterArray(numbers, value) {
  // Change code below this line
  const result = [];
  for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
    if (numbers[i] > value) {
      console.log(numbers[i]);
      result.push(numbers[i]);
      console.log(result);
    }
  }
  // Change code above this line
  return result;
}

filterArray([1, 2, 3, 4, 5], 3);
