# 7.Movie-List
Самостоятельный проект базовый JS курс sdcode
Макет Figma
https://www.figma.com/file/brsefHfM64jNTJFCvUEtgS/Movie-List?type=design&node-id=2-2 




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