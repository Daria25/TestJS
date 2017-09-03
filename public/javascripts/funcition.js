var ourFirstFunction = function () {
    console.log("Привет, мир!");
};
ourFirstFunction();

var sayHelloTo = function (name) {
    console.log("Привет, " + name + "!");
};
sayHelloTo("Ник");

var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " =^.^= ");
    }
};
drawCats(5);

var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};
printMultipleTimes(7, "=^.^=");
printMultipleTimes(4, "=^_^=");
printMultipleTimes(2, "(>_<)");

var double = function (number) {
    return number * 2;
};
double(3);
// double(5) + double(6);
double(double(3));
//Все работает. эта функция возвращает значение!!!
console.log(double(3));

var letter = function (name) {
    var x = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return x;
};

var string = function (s) {
    s = s.split(" ");
    for (var i = 0; i < s.length; i++) {
        s[i] = letter(s[i]);
    }
    return s.join(" ");
};

var pickRandomWord = function (words) {
    var randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
};
var words = ["Планета", "Червяк", "Цветок", "Комьютер"];
//console.log(Math.floor(Math.random() * words.length));
console.log(pickRandomWord(words));
console.log(pickRandomWord(["Чарли", "Радж", "Николь", "Кейт", "Сенди"]));

var randomBodyParts = ["глаза", "нос", "ухи"];
var randomAdjectives = ["вонючая", "дурацкая", "унылая"];
var randomWords = ["муха", "сопля", "выдра", "мартышка", "кукушка"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 5)];
var randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!";
var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!";
console.log(randomString);


var generateRandomInsult = function () {
    var randomBodyParts = ["глаза", "нос", "ухи"];
    var randomAdjectives = ["вонючая", "дурацкая", "унылая"];
    var randomWords = ["муха", "сопля", "выдра", "мартышка", "кукушка"];
    var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!";
    return randomString;
};
console.log(generateRandomInsult());

var fifthLetter = function (name) {
    if (name.length < 5) {
        return;
    }
    return "Пятая буква вашего имени: " + name[4] + ".";
};
console.log(fifthLetter("Виталий"));
console.log(fifthLetter("Даша"));

var medalForScore = function (score) {
    if (score < 3) {
        return "Бронзавая";
    }
    if (score < 7) {
        return "Серебреная";
    }
    return "Золотая";
};

function double(number) {
    return number * 2;
}


var multiply = function (c, d) {
    var f = c * d;
    return f;
};

var add = function (a, b) {
    var c = a + b;
    return c;
};
console.log(add(multiply(36325, 9824), 777));

var areArreysSame = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};
console.log(areArreysSame([1, 3, 6], [1, 3, 6]));


var mass = [1, 2, 3, 5, 3, 5, 6, 3, 2, 5, 4, 2, "a", "g", "ui"];
var mass1 = ["lfasdfa"];
function filterMass(array, controller) {
    var d = [];
    for (var i = 0; i < array.length; i++) {
        if (controller(array[i])) {
            d.push(array[i]);
        }
    }
    return d;
}
function chotno(x) {
    return x % 2 === 0;
}

function na3(x) {
    return x % 3 === 0;
}

function isString(x) {
    return typeof x == "string";
}


console.log(filterMass(mass, chotno));
console.log(filterMass(mass, na3));
console.log(filterMass(mass, isString));


//
// // var f = [];
// // for (var i = 0; i < mass.length; i++) {
// //     if(mass[i] % 3 == 0) {
// //         f.push(mass[i]);
// //     }
// // }
// // console.log(f);
// var s = [];
// for (var i = 0; i < mass.length; i++) {
//     if (typeof mass[i] == "string") {
//         s.push(mass[i]);
//     }
// }
// console.log(s);
function myFunc() {

}

var myFunc2 = function () {

}

function wachingMachine(laudry, program) {

}

var myLaudry = "штаны";
// var program1 = function () {
//
// };

wachingMachine(myLaudry, function () {
    return 4
});

var program2 = () => 2;

var program3 = x => x % 2 === 0;

function program4(x) {
    var result = x % 2 === 0;
    return result;
}

var name = "Dasha";

function doSomething() {
    var myLaudry = "майка";
    console.log(name);
    console.log(myLaudry);
}

doSomething();
console.log(myLaudry);

function sum(h, k) {
    var t = h + k;
    return t;
}
console.log(sum(2, 9));

var sum1 = (h, k) => h + k;

var sum2 = function (h, k) {
   return h + k;
};
console.log(sum2(5, 6));


function arraySomething(a) {
    var arrayNumber = [];
    if (a === 0) {
        return [0];
    }
    while (a !== 0) {
        arrayNumber.push(a % 10);
        a = Math.floor(a / 10);
    }
    return arrayNumber;
}
console.log(arraySomething(0));

var arraySomething1 = a => {
    var arrayNumber = [];
    if (a === 0) {
        return [0];
    }
    while (a !== 0) {
        arrayNumber.push(a % 10);
        a = Math.floor(a / 10);
    }
    return arrayNumber;
};
console.log(arraySomething1(45));

var arraySomething2 = function (a) {
    return arraySomething1(a);
};
console.log(arraySomething2(3678));

function treeArgument(a, b, c) {
    var max = 0;
    if (a > b) {
        max = a;
    }else if (b > c) {
        max = b
    } else {
        max = c;
    }
    return max;
}
console.log(treeArgument(10, 7, 9));

var treeArgument1 = (a, b, c) => {
    return treeArgument(a, b, c);
};
console.log(treeArgument1(6, 9, 2));

var treeArgument2 = function (a, b, c) {
    return treeArgument1(a, b, c);
};
console.log(treeArgument2(5, 18, 9));


function arrayN (z, x){
    var c = [];
    var count = 0;
    while (count !== x) {
        c.push(z);
        count++;
    }
    return c;
}
console.log(arrayN(2, 10));

var arrayN1 = (z, x) => {
    return arrayN(z, x);
};
console.log(arrayN1(34, 6));

var arrayN2 = function (z, x) {
    return arrayN1(z, x);
};
console.log(arrayN2(56, 7));

process.exit(0);
/**
 * Created by Vitaly on 30.08.2017.
 */
