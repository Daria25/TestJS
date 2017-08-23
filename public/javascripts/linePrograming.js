/**
 * Created by Vitaly on 15.07.2017.
 */
//6.1.1. Вычисления по формулам
var a = 1, b = 1, c = 1, d = 1, x = 1, y = 1;
var r;
//1
r = (b + Math.sqrt(Math.pow(b, 2) + (4 * a * c)) / (2 * a)) - (Math.pow(a, 3) * c) + Math.pow(b, -2);
// 2
r = (a / c) * (b / d) - ((a * b - c) / c / d);
//3
r = (Math.sin(x) + Math.cos(y)) / (Math.cos(x) - Math.sin(y)) * Math.tan(x * y);
//4
r = (x + y) / (y + 1) - (x * y - 12) / (34 + x);
// 5
r = ( 3 + Math.exp(y - 1)) / (1 + Math.pow(x, 2) * Math.abs(y - Math.tan(x)));
// 6
r = x - (Math.pow(x, 3) / 3) + (Math.pow(x, 5) / 5);
// 7
r = Math.log(Math.abs(y - Math.sqrt(Math.abs(x))) * (x - (y / (x + Math.pow(x, 2) / 4))));
//8
r = Math.pow(1 - Math.tan(x), Math.tan(x)) + Math.cos(x - y);
//9
r = Math.log(Math.abs(Math.cos(x))) / Math.log(1 + Math.pow(x, 2));
//10
r = Math.pow((x + 1) / (x - 1), x) + 18 * x * Math.pow(y, 2);
// 11
r = Math.pow(1 + 1 / Math.pow(x, 2), x) - 12 * Math.pow(x, 2) * y;
//12
r = (Math.pow(x, 2) - 7 * x + 10) / (Math.pow(x, 2) - 8 * x + 12);
//13
r = (Math.cos(x) / (Math.PI - 2 * x)) + 16 * x * Math.cos(x * y) - 2;
//14
r = Math.pow(2, -x) - Math.cos(x) + Math.sin(2 * x * y);
//15
r = 2 * Math.tan(3 * x) - (1 / 12 * Math.pow(x, 2) + 7 * x - 5);
//16
r = Math.abs(Math.pow(x, 2) - Math.pow(x, 3)) - (7 * x / (Math.pow(x, 3) - 15 * x));
//17
r = x * Math.log(x) + (y / Math.cos(x) - x / 3);
//18
r = Math.sin(Math.sqrt(x + 1)) - Math.sin(Math.sqrt(x - 1));
//19
r = Math.exp(x) - (Math.pow(y, 2) + 12 * x * y - 3 * Math.pow(x, 2)) / (18 * y - 1);
//20
r = 1 + Math.sin(Math.sqrt(x + 1)) / Math.cos(12 * y - 4);


//6.1.2
// 4
var fourNumber = 4567;
var firstNumber = Math.floor(fourNumber / 1000);
var secondNumber = Math.floor(fourNumber / 100) % 10;
var threeNumber = Math.floor(fourNumber / 10) % 100 % 10;
var fourNumber = Math.floor(fourNumber % 10);
var composition = firstNumber * secondNumber * threeNumber * fourNumber;
console.log(composition);
// 18
var a = 2;
var a2 = a * a;
var a4 = a2 * a2;
var a8 = a4 * a4;
console.log(a8);
var a2 = a * a;
var a4 = a2 * a2;
var a10 = a2 * a4 * a4;
console.log(a10);


var rad = 56;
var x = rad * (180 / Math.PI);
console.log(x);

var access;
var age = 18;
if (age > 14) {
    access = true;
} else {
    access = false;
}
console.log(access);

// var ag = 13;
// if (ag > 14){
//     acc = true;
// }
// console.log(acc);
//
// var age = 21;
// var access = age > 14;
//
// var age = 18;
// var message = (age < 3) ? "Здравствуй, малыш!" :
//     (age < 18) ? "Привет!":
//         (age < 100) ? "Здравствуйте!" :
//             "Какой необычный возраст!";
// console.log(message);


// Условное опираторы. Простые задачи.
// Случайное трехзначное число, оканчивающееся на 0
var x = Math.floor(Math.random() * 100);
x = x * (x < 10 ? 100 : 10);
console.log(x);

//Вывести нечетное число
var a = 2;
var b = 2;
if (a % 2 != 0) {
    console.log(a);
} else {
    console.log(b);
}

//Программа "Угадай число" с использованием только оператора ветвления
//если чило от 1 до 5
var k = 3;
k = (k < 2) ? "Ваше число 1" :
    (k < 3) ? "Ваше число 2" :
        (k < 4) ?"Ваше число 3" :
            (k < 5) ? "Ваше число 4" :
                "Ваше число 5";
console.log(k);

var h = 5;
switch (h) {
    case 1:
        console.log("Ваше число 1");
        break;
    case 2:
        console.log("Ваше число 2");
        break;
    case 3:
        console.log("Ваше число 3");
        break;
    case 4:
        console.log("Ваше число 4");
        break;
    default:
        console.log("Ваше число 5");
}

//Сколько цифр в числе и его знак
var ws = 123;
if (ws == 0){
    console.log("Число ноль");
} else if (ws > 0) {
    console.log("Число позитивное");
} else {
    console.log("Число негативное");
}
if (ws < 10){
    console.log("Это однозначное число");
}else if (ws < 100){
    console.log("Это двухзначное число");
} else  {
    console.log("Это или трехзначное число или больше");
}

//Определить количество дней в году
var year = 1600;
if (year % 4 == 0){
    if (year % 100 == 0 && year % 400 != 0) {
        console.log("Год точно невысокосный");
    }else {
        console.log("Точно высокосный");
    }
} else {
    console.log("Год невысокосный");
}

//Проверка кратности числа
var number = 133;
if ( number % 3 == 0) {
    console.log("Число кратно трем");
} else {
    console.log("Число не кратно трем."," Остаток от деления = " + number % 3);
}
// Определить возможность существования треугольника по сторонам
var a = 2;
var b = 4;
var c = 6;
if ((a + b > c) && (a + c > b) && ( b + c > a)) {
    console.log("Триугольник существует");
}else{
    console.log("Такого нет треугольника");
}

//Найти максимальное число из трех
var n1 = 3;
var n2 = 10;
var n3 = 10;
var max = 0;
if (n1 >= n2) {
    max = n1;
}else {
    max = n2;
}
if (n3 > max) {
    max = n3;
}
console.log(max);

//Вычисление значения функции
var x;
var y;
if (x > 0) {
    y = x - 2;
} else if (x == 0) {
    y = 0;
} else {
    y = Math.abs(x);
}
console.log( "x = " + x, "y = " + y);

//Сумма или произведение цифр трехзначного числа в зависимости от его четности
var n = Math.floor(Math.random() * 900) + 100;
var a = Math.floor(n / 100);
var b = Math.floor(n % 100 / 10);
var c = n % 10;
var sum = 0;
var composition = 0;
if (n % 2 == 0) {
    sum = a + b + c;
} else {
    composition = a * b * c;
}
console.log(n, sum, composition);

//Найти среднее число из трех
var a = 1;
var b = 3;
var c = 2;
if ((a == b) || (a == c) || (b == c) || (a == b == c)) {
    console.log("Ошибка");
}else if ((a > b) && (b < c) || (a < b) && (a > c)){
    console.log("Первое число среднее")
} else if ((b > a) && (b < c) || (b < a) && (b > c)) {
    console.log("Второе число среднее");
} else {
    console.log("Третье число среднее");
}

//for you, Cat!
var hf = "*";
if (hf >= "0" && hf <= "10") {
    console.log("Это число");
} else if ((hf >= "a" && hf <= "z") || (hf >= "A" && hf <= "Z")) {
    console.log("Это английский алфавит");
} else if ((hf >= "а" && hf <= "я") || (hf >= "А" && hf <= "Я")) {
    console.log("Это русский алфавит");
} else {
    console.log("Херня какая-то");
}


//Вывести все возможные варианты трехзначного числа
x = 110;

var a = String(Math.floor(x / 100));
var b = String(Math.floor(x % 100 /10));
var c = String(x % 10);
if ((a == b) && (b == c) && (c == a)) {
    console.log(a + b + c);
} else if ((a == b) && (b != 0) && (c == 0)) {
    console.log(a + b + c, a + c + b);
} else if ((a == c) && (c != 0) && (b == 0)) {
    console.log(a + b + c, a + c + b);
} else if (( b == c) && (b != 0)) {
    console.log(a + b + c, b + a + c, b + c + a);
} else if ((a > 0) && (b == 0) && (c == 0)) {
    console.log(a + b + c);
} else if ((a == 0) && (b > 0) && (c == 0)) {
    console.log(b + a + c);
} else if ((a == 0) && (b == 0) && (c > 0)) {
    console.log(c + a + b);
} else if ((a > 0) && (b > 0) && (c == 0)) {
    console.log(a + c + b, a + b + c, b + c + a, b + a + c);
} else if ((a > 0) && (b == 0) && (c > 0)){
    console.log(a + b + c, a + c + b, c + b + a, c + a  + b);
} else  if ((a == b) && (b != 0)){
    console.log(a + b + c, a + c + b);
} else if ((a == c) && (c != 0)) {
    console.log(a + b + c, a + c + b);
} else {
    console.log(a + b + c, a + c + b, b + a + c, b + c + a, c + a + b, c + b + a);
}

//Вычисление площадей геометрических фигур
var a = 6;
var b = 8;
var c = 10;
var d = 10;
var area;
var usser = 3;
var triangle = 1;
var rectangle = 2;
var circle = 3;
if (usser == triangle) {
    var s = (a + b + c) / 2;
    area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
} else if (usser == rectangle) {
    area = a * b;
    console.log(area);
} else if (usser == circle) {
    area = Math.PI / 4 * Math.pow(d, 2);
    console.log(area);
}



process.exit(0);