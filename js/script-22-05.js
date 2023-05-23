//======================
//Напишіть функцію для перетворення імені в ініціали. Ви отримаєтеім’я з прізвищем розділені пробілом. В результаті це має виглядати так:
// `Sam Harris => S.H`
// `Patrick Feeney => P.F`
// function abbrevName(name) {
//   const arr = name.split(” “);
//   return `${arr[0][0]}.${arr[1][0]}`;
// }
// function abbrevName(name) {
//   const arr = name.split(” “);
//   return `${arr[0].slice(0, 1)}.${arr[1].slice(0, 1)}`;
// }
// function abbrevName(name) {
//   const arr = name.split(” “);
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = arr[i].slice(0, 1);
//   }
//   return arr.join(“.”) + “.”;
// }

//======================

// Порахуй скільки голосних букв у реченні.
// function countVowel(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const leter = str.toLowerCase().split('');
//   // console.log(leter);
//   let total = 0;

//   for (let item of leter) {
//     if (vowels.includes(item)) {
//       total += 1;
//     }
//   }
//   return total;
//   // console.log(total);
// }
// console.log(countVowel('HELLO WORLD')); // 3
// console.log(countVowel('Junior Web Developer')); // 8
// console.log(countVowel('knowlage is a power')); // 7

// Порахуй скільки голосних букв у реченні.
// function countVowel(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const leter = str.toLowerCase().split("");
//   // console.log(leter);
//   let total = 0;
//   for (let item of leter) {
//     if (vowels.includes(item)) {
//       total += 1;
//     }
//   }
//   return total;
// // console.log(total);
// }
// console.log(countVowel('HELLO WORLD')); // 3
// console.log(countVowel('Junior Web Developer')); // 8
// console.log(countVowel('knowlage is a power')); // 7
// function countVowel(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const leter = str.toLowerCase();
//   // console.log(leter);
//   let total = 0;
//   for (let i = 0; i < leter.length; i += 1) {
//     if (vowels.includes(leter[i])) {
//       total += 1;
//     }
//   }
//   return total;
//   // console.log(total);
// }

// const arr = [1, [5, 6], 3, 4, [7, 7, [2, 3]]];
// function getSum(arr) {
//   let total = 0;
//   for (const item of arr) {
//     if (typeof item === 'number') {
//       total += item;
//     } else {
//       total += getSum(item);
//     }
//   }
//   return total;
// }

// console.log(getSum(arr));
