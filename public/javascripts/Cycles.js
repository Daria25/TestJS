/**
 * Created by Vitaly on 19.07.2017.
 */

//Найти сумму четных цифр числа
var z = 123456;
var sum = 0;
while (z != 0) {
    if ((z % 10) % 2 == 0) {
        sum += z % 10;
    }
    z = Math.floor(z / 10);
}
console.log(sum);

//Посчитать четные и нечетные цифры числа
var x = 987654;
var sumEven = 0;
var sumNotEven = 0;
while (x != 0) {
    if ((x % 10) % 2 == 0) {
        sumEven += x % 10;
    } else {
        sumNotEven += x % 10;
    }
    x = Math.floor(x / 10);
}
console.log(sumEven, sumNotEven);

//"Переворот" числа
var n = 345678;
var m = 0;
var a = 0;
while (n != 0) {
    a = n % 10;
    m = m * 10 + a;
    n = Math.floor(n / 10);
}
console.log(m);

//Вычисление факториала числа
var factorial = 3;
var composition = 1;
var i = 0;
while (i < factorial) {
    if (factorial > 1) {
        composition = composition * ++i;
    } else {//нахера это???
        console.log(factorial + "= 1");
    }
}
console.log(composition);

// Сумма элементов различных рядов
var n = 4;
var sum = 0;
var a = 1;
for (var i = 0; i < n; i++) {
    sum += a;
    a = -a / 2;
}
console.log(sum, a);

var a = 1;
var b = 2
var sum = 0;
for (var i = 0; Math.abs(a / b) > 0.001; i++) {
    sum += (a / b * -1);
    a++;
    b = b * 2;
}
console.log(sum, i);

//Сумма и произведение цифр числа
var f = 13579;
var sum = 0;
var composition = 1;
while (f != 0) {
    sum += f % 10;
    composition *= f % 10;
    f = Math.floor(f / 10);
}
console.log(sum, composition);

//Сумма первой и последней цифр числа
// | - вариант;
var s = 678458;
var sum = 0;
var t = s % 10;
while (s > 10) {
    var w = s % 10;
    s = Math.floor(s / 10);
}
sum = t + s;
console.log(sum);

// || - вариант;
var s = 6778849;
var sum = 0;
var a = s % 10;
var sString = String(s);
var b = sString[0];
sum = a + +b;
console.log(sum);

//Определить, какая цифра числа больше
var max = 0;
var n = -18;
if (n === 0) {
    console.log("Максимальное число 0");
} else {
    n = Math.abs(n);
}
while (n != 0) {
    var t = n % 10;
    if (t > max) {
        max = t;
    }
    n = Math.floor(n / 10);
}
console.log(max);

// Составьте таблицу значений функции
var x = -5;
while (x <= 5) {
    var y = 5 * Math.pow(x, 2) / 2;
    console.log(x, y);
    x += 0.5;
}
console.log("========================");


var x = -5;
var z = 5;
for (; x <= z; x += 0.5) {
    var y = 5 * Math.pow(x, 2) / 2;
    console.log(x, y);
}
console.log("==============================");

//Кубы чисел от A до B
var a = 2;
var b = 10;
if (a > b) {
    var z = a;
    a = b;
    b = z;
}
for (; a <= b; a++) {
    var c = a * a * a;
    console.log(c);
}
console.log("==================================");

//Вывод квадратов натуральных чисел
var n = 100;
var y;
for (var x = 1; x * x < n; x++) {
    y = x * x;
    console.log(y);
}
console.log("+++++++++++++++++++++++++++");

//Числа Фибоначчи
var n = 144;
var a = 0;
var b = 1;
var c;
while (a + b <= n) {
    c = a + b;
    a = b;
    b = c;
    console.log(b);
}
console.log("============================");

// Возведение числа в степень
var a = 3;
var b = 5;
if (b == 0) {
    console.log(1);
} else {
    console.log(Math.pow(a, b));
}
console.log("======================");

//Таблица умножения на Паскале
var a = 10;
var b;
for (var i = 1; i < a; i++) {
    for (var j = 1; j < a; j++) {
        b = j * i;
        console.log(i, "+", j, "=", b);
    }
}
console.log("++++++++++++++++++++++++");

//Удалить цифру из числа
var a = 6783;
var b = 8;
var d = 0;
while (a != 0) {
    var c = a % 10;
    if (c != b) {
        var d = d * 10 + c;
    }
    a = Math.floor(a / 10);
}
while (d != 0) {
    c = d % 10;
    a = a * 10 + c;
    d = Math.floor(d / 10);
}
console.log(a);

//Проверить, что среди первых n*n-1 чисел Фибоначчи есть хотя бы одно, делящееся на n
var n = 7;
var a = 0;
var b = 1;
var c;
var max = n * n - 1;
for (var i = 0; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    if (c % n == 0) {
        console.log(c, i);
        break;
    }
}

//Комбинации из трех чисел, дающие в сумме заданное число

var n = 7;
for (var i = 100; i < 1000; i++) {
    var d = i;
    var sum = 0;
    while (d != 0) {
        var h = d % 10;
        sum += h;
        d = Math.floor(d / 10);
    }
    if (sum == n) {
        console.log(i);
    }
}

//Найти число под заданным номером в ряду чисел, состоящих из цифр 0 и 5
var k = 12;
var d = k.toString(2);
var dM = d.split("");
for ( var i = 0; i < dM.length; i++) {
    if (dM[i] == "1") {
        dM[i] = "5";
    }
}
var t = +dM.join("");
console.log(t);

//Вывести делители чисел
//6: 2, 3
//7:
//8: 2, 4

var n = 1;
var m = 8;
for (var i = n; i <= m; i++) {
    var r = [];
    for (var j = 2; j < i; j++){
        if (i % j == 0) {
            r.push(j);
        }
    }
    console.log(i + ":" + r);
}

//Проверка гипотезы Сиракуз
for (var u = 1; u < 1000; u++){
    var y = u;
    while (y != 1) {
        if (y % 2 == 0) {
            y = y / 2;
        } else {
            y = y * 3 + 1;
        }
    }

}

console.log(y);

 //Простейший калькулятор
// while (true) {
//     var r = prompt("Введите знак");
//     if (r == null) {
//         break;
//     }
//     var q = +prompt("Введите цифру");
//     var w = +prompt("Введите цифру");
//     switch(r) {
//         case "+":
//             var t = q + w;
//             console.log(q + "+" + w + "=" + t);
//             break;
//         case "-":
//             t = q - w;
//             console.log(q + "-" + w + "=" + t);
//             break;
//         case "*":
//             t = q * w;
//             console.log(q + "*" + w + "=" + t);
//             break;
//         case "/":
//             if (q != 0) {
//                 t = q / w;
//                 console.log(q + "/" + w + "=" + t);
//             } else {
//                 console.log("Деление на 0!!!");
//             }
//             break;
//     }
// }

//Вычисление суммы ряда чисел
var p = 5;
var sum = 0;
for (var i = 1; i < p; i++) {
    sum += 1 / Math.pow(i, 2);
    console.log(sum);
}

// Программа "Угадай число"
// var a = Math.floor(Math.random() * 10);
// alert(a);
// while (true) {
//     var b = prompt("Введите цифру");
//     if ( b < a) {
//         alert("Мало");
//     }else if (b > a){
//         alert("Много");
//     } else if (b == null) {
//         break;
//     } else {
//         alert("Угадал");
//         break;
//     }
// }


//Найти одинаковые цифры двух чисел
var a = 103;
var b = 302;
var d = [];
var bString = b.toString();
var bSplit = bString.split("");
while (a != 0) {
    var c = a % 10;
    for ( var i = 0; i < bSplit.length; i++) {
        var f = +bSplit[i];
        if (c == f){
            d.push(c);
        }
    }
    a = Math.floor(a / 10);
}

console.log(d);

var a = 320;
var b = 305;

var g = [];
while (a != 0) {
    var c = a % 10;
    var d = b;
    while (d != 0) {
        var f = d % 10;
        if (c == f) {
            g.push(c);
        }
        d = Math.floor(d / 10);
    }
    a = Math.floor(a / 10);
}
var h = g.join(",");
console.log(h);
process.exit(0);
