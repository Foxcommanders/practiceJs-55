// Напишіть функцію isBookAlreadyRead для відображення статусу читання (тобто відображення назви книги, імені автора та статусу читання) наступних книг.Наприклад "Already read " + "book" by author або "You still need to read " + "book" by author
// const library = [
//   {
//     title: 'Bill Gates',
//     author: 'The Road Ahead',
//     readingStatus: true,
//   },
//   {
//     title: 'Steve Jobs',
//     author: 'Walter Isaacson',
//     readingStatus: true,
//   },
//   {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     readingStatus: false,
//   },
// ];
// function isAlreadyRead(library) {
//   for (const book of library) {
//     // console.log(book);
//     // console.log(book.readingStatus);
//     if (book.readingStatus) {
//       console.log(`Already read "${book.title}" by ${book.author}`);
//     } else {
//       console.log(`You still need to read "${book.title}" by ${book.author}`);
//     }
//   }
// }
// isAlreadyRead(library);

//======================

// // Обнови значення кожної властивості так, що перед сумою стояв знак долара.
// // Виводь результат у форматі name: $salary

// const salaries = {
//   Jack: 24000,
//   Paul: 34000,
//   Monica: 55000,
// };
// const prefix = '$';

// // console.log(prefix);
// // for (const key in salaries) {
// //     console.log(salaries[key]);
// //     salaries[key] = prefix + " " + salaries[key];
// // }
// // console.log(salaries);

// const keys = Object.keys(salaries);

// for (const key of keys) {
//   console.log(key);
//   salaries[key] = `$${salaries[key]}`;
// }
// console.log(salaries);

//======================

// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

const hogvarts = {
  griffindor: [
    {
      name: 'Harry',
      points: 17,
    },
    {
      name: 'Hermiona',
      points: 19,
    },
    {
      name: 'Ron',
      points: 14,
    },
  ],
  sliserin: [
    {
      name: 'Draco',
      points: 17,
    },
    {
      name: 'Goyl',
      points: 14,
    },
    {
      name: 'Crabbe',
      points: 5,
    },
  ],
  getStudentsList(nameFaculty) {
    const names = [];
    for (const student of this[nameFaculty]) {
      // console.log(student.name);
      names.push(student.name);
    }
    console.log(names);
    return names;
    // console.log(this[nameFaculty]);
  },
  getTotalPoints(nameFaculty) {
    // console.log(nameFaculty);
    // console.log (this[nameFaculty])
    let total = 0;
    for (const student of this[nameFaculty]) {
      // console.log(student.points);
      total += student.points;
    }
    console.log(total);
    return total;
  },
};
hogvarts.getStudentsList('griffindor');
hogvarts.getTotalPoints('griffindor');
