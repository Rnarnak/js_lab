// №1, 2, 3: Класс Book
/**
 * класс, дающий книгу.
 */
class Book {
    /**
     * создает экземпляр Book.
     * @param {string} title - название книги
     * @param {number} pubYear - год публикации
     * @param {number} price - цена книги
     */
    constructor(title, pubYear, price) {
        this.title = title;
        this._pubYear = pubYear; // защищенное свойство 
        this.#price = price;     // приватное свойство 
    }

    // объявление приватного поля
    #price;

    /**
     * выводит в консоль название и цену книги.
     */
    show() {
        console.log(`Название: ${this.title}, Цена: ${this.price}`);
    }

    /**
     * геттер для названия книги.
     * @returns {string} название книги.
     */
    get title() {
        return this._title;
    }

    /**
     * сеттер для названия книги не должно быть пустой строкой
     * @param {string} value - новое название
     */
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Название книги не может быть пустой строкой');
        }
        this._title = value;
    }

    /**
     * геттер для года публикации.
     * @returns {number} год публикации.
     */
    get pubYear() {
        return this._pubYear;
    }

    /**
     * сеттер для года публикации. должно быть положительным числом
     * @param {number} value - новый год
     */
    set pubYear(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Год публикации должен быть положительным числом');
        }
        this._pubYear = value;
    }

    /**
     * геттер для цены.
     * @returns {number} Цена книги.
     */
    get price() {
        return this.#price;
    }

    /**
     * сеттер для цены. Должно быть положительным числом
     * @param {number} value - новая цена
     */
    set price(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Цена должна быть положительным числом');
        }
        this.#price = value;
    }

    /**
     * статический метод для сравнения книг по году публикации
     * @param {Book} bookA - первая книга
     * @param {Book} bookB - вторая книга
     * @returns {number} результат для сортировки
     */
    static compare(bookA, bookB) {
        return bookA.pubYear - bookB.pubYear;
    }
}

// Пример для 1-3 (можно закомментить)
try {
    const b1 = new Book("Чистый код", 2008, 1500);
    const b2 = new Book("Совершенный код", 2004, 2300);
    const b3 = new Book("Выразительный JavaScript", 2018, 1200);

    console.log("--- Проверка метода show() ---");
    b1.show();

    console.log("--- Сортировка по году публикации ---");
    const books = [b1, b2, b3];
    books.sort(Book.compare);
    books.forEach(b => console.log(`${b.title} (${b.pubYear})`));
} catch (e) {
    console.error(e.message);
}

// №4: функция isEmpty(obj)

/**
 * проверяет, нет ли в объекте свойств 
 * @param {Object} obj - тестируемый объект
 * @returns {boolean} true, если объект пустой, иначе false
 */
function isEmpty(obj) {
    if (obj === null || obj === undefined) return true;

    // проверяем обычные и неперечисляемые свойства
    const hasProps = Object.getOwnPropertyNames(obj).length > 0;
    // проверяем символьные свойства
    const hasSymbols = Object.getOwnPropertySymbols(obj).length > 0;

    return !(hasProps || hasSymbols);
}

// №5: методы addClass и removeClass
/**
 * добавляет класс cls в строку className объекта если его там нет
 * @param {Object} obj - объект с полем className
 * @param {string} cls - имя добавляемого класса
 * @returns {Object} сам объект
 */
function addClass(obj, cls) {
    if (!obj.className) {
        obj.className = cls;
        return obj;
    }
    const classes = obj.className.split(' ').filter(c => c !== '');
    if (!classes.includes(cls)) {
        classes.push(cls);
    }
    obj.className = classes.join(' ');
    return obj;
}

/**
 * удаляет класс cls из строки className объекта, если он там есть.
 * @param {Object} obj - объект с полем className.
 * @param {string} cls - имя удаляемого класса.
 * @returns {Object} сам объект.
 */
function removeClass(obj, cls) {
    if (!obj.className) return obj;
    
    const classes = obj.className.split(' ').filter(c => c !== '' && c !== cls);
    obj.className = classes.join(' ');
    return obj;
}

// №6: JSON


/**
 * сериализует объект в JSON с отступами, выводит в консоль,
 * десериализует обратно и проверяет глубокое равенство объектов
 * @param {Object} obj - Исходный объект.
 */
function runJsonTask(obj) {
    // преобразуем в JSON с отступом в 2 пробела
    const jsonStr = JSON.stringify(obj, null, 2);
    console.log("--- JSON Строка ---");
    console.log(jsonStr);

    // декодируем обратно
    const obj2 = JSON.parse(jsonStr);

    // проверка равенства 
    const isEqual = JSON.stringify(obj) === JSON.stringify(obj2);
    console.log(`Объекты равны: ${isEqual}`);
}

// №7: Секунд с начала текущего дня

/**
 * Возвращает количество секунд, прошедших с начала сегодняшнего дня.
 * @returns {number} Количество секунд.
 */
function getSecondsToday() {
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Разница в миллисекундах переводится в секунды
    return Math.floor((now - startOfToday) / 1000);
}

// №8: форматирование даты "дд.мм.гг"

/**
 * преобразует дату в формат "дд.мм.гг".
 * @param {Date} date - объект даты.
 * @returns {string} строка формата дд.мм.гг.
 */
function formatDate(date) {
    if (!(date instanceof Date) || isNaN(date)) return "";

    const day = String(date.getDate()).padStart(2, '0');
    // месяцы от 0 до 11
    const month = String(date.getMonth() + 1).padStart(2, '0');
    // берем последние две цифры года
    const year = String(date.getFullYear()).slice(-2);

    return `${day}.${month}.${year}`;
}
export {
    Book,
    isEmpty,
    addClass,
    removeClass,
    runJsonTask,
    getSecondsToday,
    formatDate
};