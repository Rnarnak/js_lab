/**
 * Класс, представляющий книгу.
 */
export class Book {
    /** @type {string} */
    _title;

    /** @type {number} Защищённое поле */
    _pubYear;

    /** @type {number} Приватное поле */
    #price;

    /**
     * Создаёт книгу.
     * @param {string} title Название книги.
     * @param {number} pubYear Год издания.
     * @param {number} price Цена книги.
     */
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    /**
     * Возвращает название книги.
     * @returns {string}
     */
    get title() {
        return this._title;
    }

    /**
     * Устанавливает название книги.
     * @param {string} value
     */
    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Название книги не может быть пустым");
        }

        this._title = value;
    }

    /**
     * Возвращает год издания.
     * @returns {number}
     */
    get pubYear() {
        return this._pubYear;
    }

    /**
     * Устанавливает год издания.
     * @param {number} value
     */
    set pubYear(value) {
        if (typeof value !== "number" || value <= 0 || Number.isNaN(value)) {
            throw new Error("Год издания должен быть положительным числом");
        }

        this._pubYear = value;
    }

    /**
     * Возвращает цену книги.
     * @returns {number}
     */
    get price() {
        return this.#price;
    }

    /**
     * Устанавливает цену книги.
     * @param {number} value
     */
    set price(value) {
        if (typeof value !== "number" || value <= 0 || Number.isNaN(value)) {
            throw new Error("Цена должна быть положительным числом");
        }

        this.#price = value;
    }

    /**
     * Выводит информацию о книге.
     * @returns {void}
     */
    show() {
        console.log(`Книга: "${this.title}", Цена: ${this.price} руб.`);
    }

    /**
     * Сравнивает книги по году издания.
     * @param {Book} a
     * @param {Book} b
     * @returns {number}
     */
    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }
}

/* ==========================
   Задание 4
========================== */

/**
 * Проверяет, пуст ли объект.
 * Учитываются обычные и символьные свойства.
 *
 * @param {Object} obj Проверяемый объект.
 * @returns {boolean}
 */
export function isEmpty(obj) {
    return Reflect.ownKeys(obj).length === 0;
}

/* ==========================
   Задание 5
========================== */

/**
 * Добавляет методы работы с className.
 *
 * @param {Object} obj Объект со свойством className.
 * @returns {Object}
 */
export function addClassMethods(obj) {
    /**
     * Добавляет класс.
     * @param {string} cls
     * @returns {Object}
     */
    obj.addClass = function (cls) {
        const classes = this.className
            ? this.className.split(" ").filter(Boolean)
            : [];

        if (!classes.includes(cls)) {
            classes.push(cls);
        }

        this.className = classes.join(" ");
        return this;
    };

    /**
     * Удаляет класс.
     * @param {string} cls
     * @returns {Object}
     */
    obj.removeClass = function (cls) {
        const classes = this.className
            ? this.className.split(" ").filter(Boolean)
            : [];

        this.className = classes
            .filter(item => item !== cls)
            .join(" ");

        return this;
    };

    return obj;
}

/* ==========================
   Задание 6
========================== */

/**
 * Преобразует объект в JSON и обратно.
 *
 * @param {Object} obj Исходный объект.
 * @returns {Object} Новый объект после JSON.parse().
 */
export function jsonTask(obj) {
    const json = JSON.stringify(obj, null, 2);

    console.log("JSON:");
    console.log(json);

    const obj2 = JSON.parse(json);

    console.log(
        "Равны:",
        JSON.stringify(obj) === JSON.stringify(obj2)
    );

    return obj2;
}

/* ==========================
   Задание 7
========================== */

/**
 * Возвращает количество секунд,
 * прошедших с начала текущего дня.
 *
 * @returns {number}
 */
export function getSecondsToday() {
    const now = new Date();

    const startDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

    return Math.floor((now - startDay) / 1000);
}

/* ==========================
   Задание 8
========================== */

/**
 * Форматирует дату в строку ДД.ММ.ГГ.
 *
 * @param {Date} date
 * @returns {string}
 */
export function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    return `${day}.${month}.${year}`;
}
