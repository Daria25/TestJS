/**
 * Created by Vitaly on 06.07.2017.
 */
"use strict";
var array = [1, 2, 3, 4, 6];
var sum = 0;
for (var i = 0; i < array.length; i++) {
    var a = array[i];
    if (a > 3) {
        console.log(a);
        sum += a;
    }
}
var array = [1, 2, 3, 1, 2, 4, 2, 5, 3, 1, 1];
for (var i = 0; i < array.length; i++) {
    var v = array[i];
    for (var j = i + 1; j < array.length;) {
        var m = array[j];
        if (v == m) {
            array.splice(j, 1);
        }else {
            j++;
        }
    }
}
console.log(array);


var array = [1, 2, 3, 1, 2, 4, 2, 5, 3, 1, 1];
var uniq = []; //создаем новый массив в котором будем хранить уникальные элементы
for (var i = 0; i < array.length; i++) { //берем элемент массива
    var value = array[i];
    var isPresent = false; //предпологаем что в уникальном массиве нет такого элемента
    for (var j = 0; j < uniq.length; j++) { //сравниваем все элементы уникального массива с текущим элементом
        var u = uniq[j];
        if (value == u) { //если элемент из первого массива присутствует в уникальном массиве
            isPresent = true;
            break;
        }
    }
    if (!isPresent) {
        uniq.push(value);
    }
}

console.log(array);
console.log(uniq);
console.log("asdfasdf,asdfasd,sdfasdf,asdfas".split(","));
process.exit(0);
