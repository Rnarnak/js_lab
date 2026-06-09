/**
класс, представляющий книгу
*/
export class Book {
    /** @type {string} - Название книги (внутреннее поле) */
    _title;
    /** @type {number} - Год издания (защищенное поле) */
    _pubYear;
    /** @type {number} - Цена книги (приватное поле) */
    #price;

    /**
    конструктор для создания экземпляр книги
    @param {string} title - Название книги (не может быть пустой строкой)
    @param {number} pubYear - Год издания (положительное число)
    @param {number} price - Цена книги (положительное число)
    @throws {Error} Если валидация не пройдена
    */
    constructor(title, pubYear, price) {
        this.title = title;
        this._pubYear = pubYear;
        this.#price = price;
    }

    /**
    сеттер для названия книги
    @param {string} value - новое название
    @throws {Error} если название - пустая строка
    */
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Название книги не может быть пустой строкой');
        }
        this._title = value;  // ИСПРАВЛЕНО: сохраняем во внутреннее поле
    }

    /**
    геттер для названия книги
    @returns {string} Название книги
    */
    get title() {
        return this._title;  // ИСПРАВЛЕНО: читаем из внутреннего поля
    }

    /**
    геттер для года издания
    @returns {number} Год издания
    */
    get pubYear() {
        return this._pubYear;
    }

    /**
    сеттер для года издания
    @param {number} value - Новый год издания
    @throws {Error} Если значение не является положительным числом
    */
    set pubYear(value) {
        if (typeof value !== 'number' || isNaN(value) || value <= 0) {
            throw new Error('Год издания должен быть положительным числом');
        }
        this._pubYear = value;
    }

    /**
    геттер для цены книги
    @returns {number} Цена книги
    */
    get price() {
        return this.#price;
    }

    /**
    сеттер для цены книги
    @param {number} value - Новая цена
    @throws {Error} Если значение не является положительным числом
    */
    set price(value) {
        if (typeof value !== 'number' || isNaN(value) || value <= 0) {
            throw new Error('Цена должна быть положительным числом');
        }
        this.#price = value;
    }

    /**
    метод, который выводит в консоль название и цену книги
    */
    show() {
        console.log(`Книга: "${this.title}", Цена: ${this.#price} руб.`);
    }

    /**
    статический метод для сравнения книг по году издания
    @param {Book} a - Первая книга
    @param {Book} b - Вторая книга
    @returns {number} -1, если a раньше b; 1, если a позже b; 0, если равны
    */
    static compare(a, b) {
        if (a._pubYear < b._pubYear) return -1;
        if (a._pubYear > b._pubYear) return 1;
        return 0;
    }
}

/**
проверяет, является ли объект пустым (не имеет собственных свойств, включая неперечисляемые и символьные).
@param {Object} obj - объект для проверки.
@returns {boolean} возвращает true, если у объекта нет собственных ключей, иначе false.
*/
export function isEmpty(obj) {
    return Reflect.ownKeys(obj).length === 0;
}

/**
добавляет методы addClass и removeClass к переданному объекту.
предполагается, что объект имеет свойство className (строка с классами через пробел).
методы поддерживают цепочку вызовов (возвращают this).
@param {Object} obj - объект, к которому нужно добавить методы. Должен иметь свойство className.
@returns {Object} тот же объект с добавленными методами.
*/
export function addClassMethods(obj) {
    obj.addClass = function(cls) {
        const classes = this.className ? this.className.split(' ') : [];
        if (!classes.includes(cls)) {
            classes.push(cls);
            this.className = classes.join(' ');
        }
        return this;
    };
    
    obj.removeClass = function(cls) {
        const classes = this.className ? this.className.split(' ') : [];
        const index = classes.indexOf(cls);
        if (index !== -1) {
            classes.splice(index, 1);
            this.className = classes.join(' ');
        }
        return this;
    };
    
    return obj;
}

/**
возвращает колво секунд с начала дня
@returns {number} количество секунд с начала текущего дня.
*/
export function getSecondsToday() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - startOfDay) / 1000);
}

/**
форматирует дату в строку вида DD.MM.YY.
@param {Date} date - объект Date для форматирования.
@returns {string} строка с датой в формате DD.MM.YY
*/
export function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
}

/**
выполняет глубокое сравнение двух объектов путем их сериализации в JSON.
@param {*} obj1 - Первый объект для сравнения.
@param {*} obj2 - Второй объект для сравнения.
@returns {boolean} Возвращает true, если JSON-представления объектов идентичны, иначе false.
*/
export function deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
