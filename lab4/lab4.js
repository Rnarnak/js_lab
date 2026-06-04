/**
 * Класс, представляющий книгу.
 */
export class Book {
    /** @type {string} - Название книги (внутреннее свойство) */
    _title;
    
    /** @type {number} - Год издания (приватное поле) */
    #pubYear;
    
    /** @type {number} - Цена книги (приватное поле) */
    #price;

    /**
     * Конструктор для создания экземпляра книги.
     * @param {string} title - Название книги (не пустая строка)
     * @param {number} pubYear - Год издания (положительное число)
     * @param {number} price - Цена книги (положительное число)
     * @throws {Error} Если валидация в сеттерах не пройдена
     */
    constructor(title, pubYear, price) {
        // Инициализируем через сеттеры для автоматической валидации
        this.title = title; 
        this.pubYear = pubYear;
        this.price = price;
    }

    /**
     * Геттер для названия книги
     * @returns {string} Название книги
     */
    get title() {
        return this._title;
    }

    /**
     * Сеттер для названия книги
     * @param {string} value - Новое название
     * @throws {Error} Если название — пустая строка
     */
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Название книги не может быть пустой строкой');
        }
        this._title = value;  
    }

    /**
     * Геттер для года издания
     * @returns {number} Год издания
     */
    get pubYear() {
        return this.#pubYear;
    }

    /**
     * Сеттер для года издания
     * @param {number} value - Новый год издания
     * @throws {Error} Если значение не является положительным числом
     */
    set pubYear(value) {
        if (typeof value !== 'number' || isNaN(value) || value <= 0) {
            throw new Error('Год издания должен быть положительным числом');
        }
        this.#pubYear = value;
    }

    /**
     * Геттер для цены книги
     * @returns {number} Цена книги
     */
    get price() {
        return this.#price;
    }

    /**
     * Сеттер для цены книги
     * @param {number} value - Новая цена
     * @throws {Error} Если значение не является положительным числом
     */
    set price(value) {
        if (typeof value !== 'number' || isNaN(value) || value <= 0) {
            throw new Error('Цена должна быть положительным числом');
        }
        this.#price = value;
    }

    /**
     * Метод, который выводит в консоль название и цену книги
     */
    show() {
        console.log(`Книга: "${this.title}", Цена: ${this.price} руб.`);
    }

    /**
     * Статический метод для сравнения книг по году издания
     * @param {Book} a - Первая книга
     * @param {Book} b - Вторая книга
     * @returns {number} Разница годов для сортировки
     */
    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }
}

/**
 * Задание 4: Проверяет, является ли объект пустым (включая неперечисляемые свойства).
 *
 * @param {Object} obj - Объект для проверки.
 * @returns {boolean} true, если у объекта нет собственных свойств, иначе false.
 */
export function isEmpty(obj) {
    if (obj === null || obj === undefined) return true;
    // Reflect.ownKeys видит абсолютно все свойства: перечисляемые, неперечисляемые и Symbol
    return Reflect.ownKeys(obj).length === 0;
}

/**
 * Задание 5: Добавляет методы addClass и removeClass к переданному объекту.
 *
 * @param {Object} obj - Объект, содержащий свойство className.
 * @returns {Object} Тот же объект с внедренными методами.
 */
export function addClassMethods(obj) {
    obj.addClass = function(cls) {
        const classes = this.className ? this.className.split(' ').filter(Boolean) : [];
        if (!classes.includes(cls)) {
            classes.push(cls);
            this.className = classes.join(' ');
        }
        return this;
    };

    obj.removeClass = function(cls) {
        if (!this.className) return this;
        const classes = this.className.split(' ').filter(c => c && c !== cls);
        this.className = classes.join(' ');
        return this;
    };

    return obj;
}

/**
 * Задание 6: JSON сериализация и десериализация с проверкой на равенство.
 * @param {Object} obj - Исходный объект.
 */
export function runJsonTask(obj) {
    const jsonStr = JSON.stringify(obj, null, 2);
    console.log("--- JSON Строка ---");
    console.log(jsonStr);

    const obj2 = JSON.parse(jsonStr);
    const isEqual = JSON.stringify(obj) === JSON.stringify(obj2);
    console.log(`Объекты равны: ${isEqual}`);
}

/**
 * Задание 7: Возвращает количество секунд, прошедших с начала сегодняшнего дня.
 * @returns {number} Количество секунд.
 */
export function getSecondsToday() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - startOfDay) / 1000);
}

/**
 * Задание 8: Форматирует дату в строку вида DD.MM.YY.
 * @param {Date} date - Объект Date для форматирования.
 * @returns {string} Строка с датой в формате DD.MM.YY.
 */
export function formatDate(date) {
    if (!(date instanceof Date) || isNaN(date)) return "";
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    
    return `${day}.${month}.${year}`;
}
