"use strict";

//Сумма и произведение цифр случайного трехзначного числа
var number = Math.floor(Math.random() * 1000);
if (number < 100) {
    number *= 10;
}
var n3 = number % 10;
var n2 = Math.floor(number / 10) % 10;
var n1 = Math.floor(number / 100);
var sum = n1 + n2 + n3;
var complit = n1 * n2 * n3;
console.log(sum, complit);

//Обмен значений переменных
var a = 2;
var b = 5;
var c;
c = a;
a = b;
b = c;
console.log(a, b);

//Вводится четырёхзначное число (abcd). Вывести сумму ab + cd.
var fourNumber = 3456;
var fN4 = fourNumber % 10;
var fN3 = Math.floor(fourNumber / 10) % 10;
var fN2 = Math.floor(fourNumber / 100) % 10;
var fN1 = Math.floor(fourNumber / 1000);
var sum = fN1 * fN2 + fN3 * fN4;
console.log(sum);

//"Заем". Арифметические выражения, возведение в степень
var p = 3;
var r = p / 100;
var s = 10000;
var n = 3;
var m = s * r * Math.pow((1 + r), n) / (12 * (Math.pow((1 + r), n) - 1));
console.log(m);

//Сгенерировать случайное трехзначное число, оканчивающееся на ноль.
var randomNumber = Math.floor(Math.random() * 100);
if (randomNumber == false) {
    console.log("Try again.");
} else if (randomNumber < 10) {
    randomNumber += "00";
} else if (randomNumber < 100) {
    randomNumber += "0";
}
console.log(randomNumber);

//Из двух чисел с разной четностью вывести на экран нечетное число.
var num1 = 27;
var num2 = 76424;
if (num1 % 2 == 0) {
    console.log(num1);
} else {
    console.log(num2);
}

// ||-variant
var nu1 = Math.floor(Math.random() * 100);
var nu2 = Math.floor(Math.random() * 10);
if (nu1 % 2 == 0) {
    console.log(nu1 + " - this is first number");
} else if (nu2 % 2 == 0) {
    console.log(nu2 + " - this is second number");
} else {
    console.log("try again");
}


//Сколько цифр в числе и его знак
var userNumber = -12345;
if (userNumber == 0) {
    console.log("Zero");
} else if (userNumber < 0) {
    console.log("Negative");
} else {
    console.log("Positive");
}
if (Math.abs(userNumber) < Math.abs(10)) {
    console.log("однозначным");
} else if ((Math.abs(userNumber) > Math.abs(10)) && (Math.abs(userNumber) < Math.abs(100))) {
    console.log("двухзначным");
} else if ((Math.abs(userNumber) > Math.abs(100)) && (Math.abs(userNumber) < Math.abs(1000))) {
    console.log("трехзначным");
} else {
    console.log("более трехзначным");
}

//задачка от Виталика
var Vmin = 3;
var Vmax = 10;
var r = Math.random();
var Vitalik = Vmin + Math.floor(r * (Vmax - Vmin));
console.log(Vitalik);

//Определить количество дней в году
var year = 1200;
if ((year % 4 != 0) || (year % 100 == 0 && year % 400 != 0)) {
    console.log("год невисокосный");
} else {
    console.log("год високосный");
}

//Определить, кратно ли заданное число трем; если нет, вывести остаток.
var multiple = 229;
var numberUser = 3;
var mul = multiple % numberUser;
if (mul == 0) {
    console.log("число кратно трем");
} else {
    console.log(mul);
}

//Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
var userNum1 = 43;
var userNum2 = 864;
var userNum3 = 763;
if ((userNum1 > userNum2) && (userNum1 > userNum3)) {
    console.log(userNum1);
} else if ((userNum2 > userNum3) && (userNum2 > userNum1)) {
    console.log(userNum2);
} else {
    console.log(userNum3);
}

//Требуется написать программу, вычисляющую значение какой-либо функции
var y;
var x = 0;
if (x > 0) {
    y = x - 2;
} else if (x == 0) {
    y = 0;
} else {
    y = Math.abs(x);
}
console.log(y);

//Проверить трехзначное число на четность и найти сумму его цифр, если число четное, или произведение его цифр, если число нечетное.
var n = 223;
var n3 = n % 10;
var n2 = Math.floor(n / 10) % 10;
var n1 = Math.floor(n / 100) % 10;
if (n % 2 == 0) {
    var sum = n1 + n2 + n3;
    console.log(sum);
} else {
    var multiple = n1 * n2 * n3;
    console.log(multiple);
}

//Среди трех чисел найти среднее. Если среди чисел есть равные, вывести сообщение "Ошибка".
var ul1 = 475;
var ul2 = 476;
var ul3 = 473;
if ((ul1 == ul2) || (ul2 == ul3) || (ul3 == ul1)) {
    console.log("Ошибка");
} else if ((ul1 > ul2) && (ul1 < ul3) || (ul1 < ul2) && (ul1 > ul3)) {
    console.log("среднее " + ul1);
} else if ((ul1 < ul2) && (ul2 < ul3) || (ul1 > ul2) && (ul2 > ul3)) {
    console.log("среднее " + ul2);
} else {
    console.log("среднее " + ul3);
}

//Дано трехзначное число. Вывести на экран все трехзначные числа, которые можно получить из цифр данного числа.
var optionNumber = 345;
var o1 = optionNumber % 10;
var o2 = Math.floor(optionNumber / 10) % 10;
var o3 = Math.floor(optionNumber / 100) % 10;
 if ((o1 == 0) && (o2 == 0)) {
    console.log("" + o3 + o1 + o2);
} else if ((o2 == 0) && (o3 == 0)) {
    console.log("" + o1 + o2 + o3);
} else if ((o1 == o2) && (o1 != o3) && (o3 != o2)) {
    console.log(""+o1 + o2 + o3, "" + o1 + o3 + o2, "" + o3 + o2 + o1);
} else if ((o2 == o3) && (o1 == 0)) {
     console.log("" + o3 + o2 + o1, "" + o3 + o1 + o2);
} else if ((o3 == o1) && (o2 == 0)) {
     console.log("" + o3 + o2 + o1, "" + o3 + o1 + o2);
 } else if ((o2 == o3) && (o3 != o1) && (o1 != o2)) {
    console.log("" + o1 + o2 + o3, "" + o3 + o1 + o2, "" + o3 + o2 + o1);
} else  if ((o1 == o3) && (o1 != o2) && (o2 != o3)) {
    console.log("" + o1 + o2 + o3, "" + o1 + o3 + o2, "" + o2 + o1 + o3);
} else if ((o1 == 0) && (o2 != 0) && (o3 != 0)) {
    console.log("" + o2 + o1 + o3, "" + o2 + o3 + o1, "" + o3 + o1 + o2, "" + o3 + o2 + o1);
} else if ((o2 == 0) && (o1 != 0) && (o3 != 0)) {
    console.log("" + o3 + o2 + o1, "" + o3 + o1 + o2, "" + o1 + o2 + o3, "" + o1 + o3 + o2);
} else {
    console.log("" + o1 + o2 + o3, "" + o1 + o3 + o2, "" + o2 + o1 + o3, "" + o2 + o3 + o1, "" + o3 + o1 + o2, "" + o3 + o2 + o1);
}

//Вводится натуральное число. Найти сумму четных цифр, входящих в его состав.






