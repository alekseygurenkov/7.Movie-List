// Получаем элементы по их CSS-селекторам
const inputNode = document.querySelector('.js-add_movies-name');// Элемент ввода для названия фильма
const btnInputNode = document.querySelector('.js-btn_add-movies');  // Кнопка для добавления фильма
const listNode = document.querySelector('.js-movie_list');  // Список для отображения добавленных фильмов

let listMovies = [];  // Массив для хранения названий фильмов

// Добавляем обработчик события клика на кнопку
btnInputNode.addEventListener('click', function () {
    // Получаем название фильма от пользователя
    const movie = getMovieFromUser();

    if (!movie) {  // Если название фильма не введено
        return;  // Ничего не делаем и выходим
    }
    
    // Добавляем фильм в список и отображаем его
    trackList(movie);
    render();
})

// Добавляем обработчик события нажатия клавиши на текстовое поле
inputNode.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) { // Если нажата клавиша Enter
      btnInputNode.click(); // Инициируем клик на кнопку
    }
  });

function trackList(movie) {
    // Добавляем название фильма в массив
    listMovies.push(movie);
}

function getMovieFromUser() {
    if (!inputNode.value) {  // Если поле ввода пустое
        alert('Введите название фильма');  // Выводим сообщение об ошибке
        return null;  // Возвращаем null, если поле пустое
    }
    
    const movie = inputNode.value.trim();  // Получаем и очищаем введенное значение
    clearInput();  // Очищаем поле ввода
    return movie;  // Возвращаем название фильма
}

function clearInput() {
    // Очищаем значение поля ввода
    inputNode.value = '';
}

function render() {
    // Очищаем список перед добавлением новых элементов
    listNode.innerHTML = '';

    listMovies.forEach((movie, index) => {
        // Создаем основной div элемент
        const movieItem = document.createElement('div');
        movieItem.className = 'movie_item';

        // Создаем иконку для элемента списка
        const iconMovie = document.createElement('div');
        iconMovie.className = 'icon_Movie';

        // Добавляем обработчик клика на иконку
        iconMovie.addEventListener('click', () => {
            movieItem.classList.toggle('active'); // Переключаем класс для изменения цвета фона
            crossOutMovie(movieItem, iconMovie, movieText);
        });

        // Создаем параграф для текста с классом movie_text
        const movieText = document.createElement('p');
        movieText.className = 'movie_text';
        movieText.textContent = movie; // Устанавливаем текст

        // Создаем кнопку для удаления элемента
        const deleteButton = document.createElement('div');
        deleteButton.className = 'delete_movie';

        // Создаем иконку для кнопки удаления
        const deleteIcon = document.createElement('img');
        deleteIcon.src = 'close.png';

        // Добавляем обработчик клика на кнопку удаления
        deleteButton.addEventListener('click', () => {
            deleteMovie(index);
        });

        // Добавляем иконку удаления к кнопке
        deleteButton.appendChild(deleteIcon);

        // Добавляем элементы в правильном порядке внутрь основного div
        movieItem.appendChild(iconMovie);
        movieItem.appendChild(movieText);
        movieItem.appendChild(deleteButton);

        // Добавляем элемент списка в общий список
        listNode.appendChild(movieItem);
    });
}

function crossOutMovie(movieItem, iconMovie, movieText) {
    // Переключаем класс для отображения зачеркнутого элемента
    movieItem.classList.toggle('cross_out_movie');
    // Переключаем класс для отображения зачеркнутого элемента
    movieText.classList.toggle('cross_out_movie');
    // Переключаем класс для иконки
    iconMovie.classList.toggle('cross_out_type');
}



function deleteMovie(index) {
    // Удаляем элемент из массива фильмов
    listMovies.splice(index, 1);
    // Обновляем отображение списка фильмов
    render();
}