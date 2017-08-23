/**
 * Created by Vitaly on 29.07.2017.
 */
//Вывести в порядке возрастания цифры, из которых состоит число
var a = [2, 8, 4, 6, 4, 0, 2];
var b = [];
// b.push(a[0]);

for (var i = 0; i < a.length; i++) {
    var notFound = true;
    for (var j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            notFound = false;
        }
    }
    if (notFound) {
        b.push(a[i]);
    }
}
console.log(b);

//Элементы массива, которые больше предыдущего
var q = [3, 9, 8, 4, 5, 1];
var w = [];
for (var i = 0; i < q.length; i++) {
    if (q[i] < q[i + 1]) {
        w.push(q[i + 1]);
    }
}
console.log(w);

//Разделить элементы массива на максимальный
var r = [20, 5, 7, 4, 8, 10];
var t = [];
var max = r[0];
for (var i = 0; i < r.length; i++) {
    if (max < r[i]) {
        max = r[i];
    }
}
for (i = 0; i < r.length; i++) {
    var y = r[i] / max;
    t.push(y);
}
console.log(max, t);

//Первый положительный элемент массива
var u = [-1, -5, -10, 8, -4, -6];
var pol = 0;
var j = 0;
for (var i = 0; i < u.length; i++) {
    if (u[i] > 0) {
        pol = u[i];
        break;
    }
    j++;
}
console.log(pol, j);

//Заменить элементы массива на противоположные
var o = [1, -5, 0, 3, -4];
for (var i = 0; i < o.length; i++) {
    if (o[i] != 0) {
        o[i] = -1 * o[i];
    }
}
console.log(o);

// Поменять местами минимальный и максимальный элементы массива
var p = [8, 5, 1, 3, 5, 9, 12];
var min = max = p[0];
var minIndex = maxIndex = 0;
for (var i = 0; i < p.length; i++) {
    if (max < p[i]) {
        max = p[i];
        maxIndex = i;
    }
    if (min > p[i]) {
        min = p[i];
        minIndex = i
    }
}
var a = p[maxIndex];
p[maxIndex] = p[minIndex];
p[minIndex] = a;
console.log(p);

//Найти разность между максимальным и минимальным элементами массива
var s = [5, 3, 9, 12, 4, 2, 38];
var min = max = s[0];
var raz = 0;
for (var i = 0; i < s.length; i++) {
    if (max < s[i]) {
        max = s[i];
    }
    if (min > s[i]) {
        min = s[i];
    }
}
raz = max - min;
console.log(raz);

//Найти сумму четных отрицательных элементов массива
var d = [3, -5, -2, 4, -8, 0];
var sum = 0;
for (var i = 0; i < d.length; i++) {
    if (d[i] < 0 && d[i] % 2 == 0) {
        sum += d[i];
    }
}
console.log(sum);

//Минимальный из элементов массива с нечетными индексами
var f = [3, 4, 8, 9, 1, 4, 5, -8];
var min = f[0];
for (var i = 1; i < f.length; i += 2) {
    if (min > f[i]) {
        min = f[i];
    }
}
console.log(min);

// Вывести элементы массива, которые больше среднего арифметического
var g = [8, 10, 2, 5, 7, 15];
var mid = 0;
var h = [];
for (var i = 0; i < g.length; i++) {
    mid += g[i];
}
mid = Math.round(mid / g.length);
for (i = 0; i < g.length; i++) {
    if (g[i] > mid) {
        h.push(g[i]);
    }
}
console.log(h);

//Сумма положительных элементов массива
var k = [-8, 3, -5, 2, 9, -6];
var sum = 0;
for (var i = 0; i < k.length; i++) {
    if (k[i] > 0) {
        sum += k[i];
    }
}
console.log(sum);

//Найти количество положительных элементов массива
var l = [2, 6, -2, -9, 7, 8, 0];
var count = 0;
for (var i = 0; i < l.length; i++) {
    if (l[i] > 0) {
        count++;
    }
}
console.log(count);

// Сформировать массив B из положительных элементов массива A, имеющих четный индекс
var z = [2, 4, -9, 0, -4, 5, -7, 8, 2, 4, 5];
var x = [];
var sum = 0;
for (var i = 0; i < z.length; i += 2) {
    if (z[i] > 0) {
        x.push(z[i]);
    }
}
for (i = 0; i < x.length; i++) {
    sum += Math.pow(x[i], 2);
}
console.log(sum);

//Найти среднее арифметическое отрицательных элементов массива. Заменить на него минимальный элемент.
var c = [4, -5, 9, -10, 4, 6, 12, -3];
var mid = 0;
var min = c[0];
var minIndex = 0;
var count = 0;
for (var i = 0; i < c.length; i++) {
    if (min > c[i]) {
        min = c[i];
        minIndex = i;
    }
    if (c[i] < 0) {
        mid += c[i];
        count++;
    }
}
mid = Math.round(mid / count);
c[minIndex] = mid;
console.log(c);

//Определить индексы элементов массива, значение которых лежит в указанном пределе
var v = [3, 5, 7, 9, 1, 4, 2, 6];
var min = 3;
var max = 7;
var b = [];
var count = 0;
for (var i = 0; i < v.length; i++) {
    if ((v[i] > min) && (v[i] < max)) {
        b.push(i);
        count++;
    }
}
console.log(b, count, b.length);

//Найти числа, отклоняющиеся от среднего значения
var n = [3, 5, 7, 9, 1, 4, 2, 6];
var mid = 0;
var qw = [];
var er = [];
for (var i = 0; i < n.length; i++) {
    mid += n[i];
}
mid = Math.round(mid / n.length);
for (i = 0; i < n.length; i++) {
    var m = (n[i] - mid) / mid * 100;
    if ((m > -50) && (m < 50)) {
        qw.push(n[i]);
    } else {
        er.push(n[i]);
    }
}
console.log(er);

//Максимальный по модулю элемент массива
var ty = [4, -5, 9, -10, 4, 6, 12, -3];
var max = ty[0];
for (var i = 0; i < ty.length; i++) {
    if (max < Math.abs(ty[i])) {
        max = ty[i];
    }
}
console.log(max);

//Среднее арифметическое всех чётных элементов массива, стоящих на нечётных местах
var ui = [1, 3, 5, 6, 7, 2, 9, 12, 41, 6, 8, 14];
var mid = 0;
var count = 0;
for (var i = 1; i < ui.length; i += 2) {
    if (ui[i] % 2 == 0) {
        mid += ui[i];
        count++;
    }
}
mid = Math.round(mid / count);
console.log(mid);

//Распаковка массива
var io = [5, 3, 1, -4, 5, 2];
var result = [];
for (var i = 0; i < io.length; i++) {
    var value = i % 2;
    for (var j = 0; j < io[i]; j++) {
        result.push(value);
    }
}
console.log(result);

//Сжатие массива нулей и единиц
var op = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1];
var up = [];
var value = op[0];
var count = 1;
var negCount = 1;
for (var i = 1; i < op.length; i++) {
    if (value == op[i]) {
        count++;
    } else {
        up.push(count);
        count = 1;
        value = op[i];
    }
}
up.push(count);
console.log(up);

//
process.exit(0);