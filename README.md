# 7.Movie-List
Самостоятельный проект базовый JS курс sdcode
Макет Figma
https://www.figma.com/file/brsefHfM64jNTJFCvUEtgS/Movie-List?type=design&node-id=2-2 

Исправить:
1. Оформление добавленного фильма ✓
1.1. убрать контур зеленый ✓
1.2. сделать заливку обводки как в макете ✓
2. Исправить второй вложенный цвет, т.е. первый фон #181818, второй фон #232323, третий фон самого фильма уже #3A3939 ✓
3. Проверить цвета букв и размеры шрифтов ✓
4. Исправить размеры стрелочки (кнопки ввода) ✓
5. Исправить положение кнопки относитель строки ✓
6. Исправить выравнивание текста внутри строки ✓



19.02.25 - разобраться с положением текста внутри блока с фильмом, чтобы текст был не в центре а слева ✓
         - сделать смену фона блока с фильмом при нажатии на кружочек ✓





### Комментарии к коду:

1. **Инициализация переменных:**
```javascript
// Получаем элементы по их CSS-селекторам
const inputNode = document.querySelector('.js-add_movies-name');  // Элемент ввода для названия фильма
const btnInputNode = document.querySelector('.js-btn_add-movies');  // Кнопка для добавления фильма
const listNode = document.querySelector('.js-movie_list');  // Список для отображения добавленных фильмов

let listMovies = [];  // Массив для хранения названий фильмов
```

2. **Обработчик клика на кнопку:**
```javascript
// Добавляем обработчик события клика на кнопку
btnInputNode.addEventListener('click', function () {
    // Получаем название фильма от пользователя
    const movie = getMovieFromUser();

    if (!movie) {  // Если название фильма не введено