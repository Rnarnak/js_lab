<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тестирование lab3.js</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
    <script>
        // Включаем режим тестирования в стиле BDD
        mocha.setup('bdd');
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
    <script>
        // Объявим assert глобально
        let assert = chai.assert;
    </script>
</head>

<body>
    <script type="module">
        import {
            getDecimal,
            divmod,
            ucFirst,
            normalizeUrl,
            checkSpam,
            truncate,
            camelize,
            fibs,
            arrReverseSorted,
            unique
        } from './lab3.js';

        describe("getDecimal", function () {
            it("getDecimal(1.23) => 0.23", function () {
                assert.strictEqual(getDecimal(1.23), 0.23);
            });

            it("getDecimal(-1.23) => 0.77", function () {
                assert.strictEqual(getDecimal(-1.23), 0.77);
            });

            it("getDecimal(1) => 0", function () {
                assert.strictEqual(getDecimal(1), 0);
            });
        });

        describe("divmod", function () {
            it("divmod(7, 3) => [2, 1]", function () {
                assert.deepEqual(divmod(7, 3), [2, 1]);
            });

            it("divmod(-7, 3) => [-3, 2]", function () {
                assert.deepEqual(divmod(-7, 3), [-3, 2]);
            });

            it("divmod(7, -3) => [-3, -2]", function () {
                assert.deepEqual(divmod(7, -3), [-3, -2]);
            });

            it("divmod(0, 0) => [NaN, NaN]", function () {
                assert.deepEqual(divmod(0, 0), [NaN, NaN]);
            });
        });

        describe("ucFirst", function () {
            it("ucFirst('') => ''", function () {
                assert.strictEqual(ucFirst(''), '');
            });

            it("ucFirst('hello') => 'Hello'", function () {
                assert.strictEqual(ucFirst('hello'), 'Hello');
            });

            it("ucFirst('привет') => 'Привет'", function () {
                assert.strictEqual(ucFirst('привет'), 'Привет');
            });
        });

        describe("normalizeUrl", function () {
            it("normalizeUrl('yandex.ru') => '
