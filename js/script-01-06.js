//======================================================================

// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).

// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// Приклад ініціалізації екземпляру класа:

// class User {
//   #name;
//   #surname;
//   constructor(name, surname){
//     this.#name = name;
//     this.#surname = surname;
//   }
//   getFullName(){
//     return `${this.#name} ${this.#surname}`;
//   }
// }

// class Student extends User {
//   constructor(name, surname, year){
//     super(name, surname)
//     this.year = year;
//   }
//   getCourse(){

//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const course = currentYear - this.year;
//     return course > 5 ?`This student graduated institute`:course
//   }
// }
// const student1 = new Student();

//  const student = new Student('Петрик', 'Пяточкин', 2019);
// console.log(student);

// console.log(student.getFullName());; //поверне 'Петрик Пяточкин'
// console.log(student.getCourse());;   //поверне 4 (четвертий курс)

//======================================================================

// Представлений масив фільмів (films) кожен елемент масиву являється об'єктом в якого є назва фільму та масив з жанрами до яких він відноситься, але в масиві (genreIDs) тільки ID цих фільмів.
// Потрібно в кожен об'єкт додати ключ genreNames який буде масивом з назвами жанрів до яких цей фільм відноситься. Після чого відрендерити список фільмів як наведено в прикладі нижче (Expected result), якщо в списку жанрів більш ніж 2 фільми тоді рендеримо назву перших двох жанрів, а всі інші замінюємо на "Others".
// Співвідношення ID жанру та назви жанру знаходиться в об'єкті genresInfo.

// //Object example
// {
//     title: "Interceptor",
//     genreIDs: [
//         28,
//         53,
//         12,
//     ],
//     genreNames: [
//         "Action",
//         "Thriller",
//         "Adventure"
//     ]
// }

////  Expected result
// Films list:
// 1. 'Interceptor: Action, Thriller, Others.'
// 2. 'Fantastic Beasts: The Secrets of Dumbledore: Fantasy, Adventure, Others.'
// 3. 'Last Seen Alive: Action, Thriller.'
// 4. 'Jurassic World Dominion: Science Fiction, Action, Others.'
const films = [
  {
    title: 'Interceptor',
    genreIDs: [28, 53, 12],
  },
  {
    title: 'Fantastic Beasts: The Secrets of Dumbledore',
    genreIDs: [14, 12, 28],
  },
  {
    title: 'Last Seen Alive',
    genreIDs: [28, 53],
  },
  {
    title: 'Jurassic World Dominion',
    genreIDs: [878, 28, 12, 53],
  },
];
const genresInfo = {
  genres: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ],
};

// films.forEach(film => {
//   const generNames = film.genreIDs.map(el => {
//     const itemFilm = genresInfo.genres.find(({ id }) => id === el);
//     return itemFilm.name;
//   });
//   film.generNames = generNames;
// });
// console.log(films);

films.forEach(
  film =>
    (film.generNames = film.genreIDs.map(
      el => genresInfo.genres.find(({ id }) => id === el).name,
    )),
);
console.log(films);

// const filmName = films.reduce((acc, {title,generNames}, idx)=>
//  acc += `${idx + 1}. ${title} : ${generNames.length > 2 ? `${generNames[0]}, ${generNames[1]}, Others`: generNames.join(', ')} \n`,'Films list:\n')
// console.log(filmName);
// const filmName = films.reduce((acc, {title,generNames}, idx)=>
//  acc += `${idx + 1}. ${title} : ${generNames.length > 2 ? `${generNames.slice(0,2).join(', ')}, Others`: generNames.join(', ')} \n`,'Films list:\n')
// console.log(filmName);

//======================================================================


// Створити функцію яка буде приймати масив довільних чисел
// і перевіряти чи вони є виграшними
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
function amIwon(array) {
  return wins.some((el) => el.every((ele) => array.includes(ele)))
    ? console.log(“You won”)
    : console.log(“Fail”);
}
// amIwon([4, 1, 2]);
amIwon([5, 1, 9]);
// amIwon([6, 4, 3, 5]);
