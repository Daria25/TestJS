var ourFirstFunction = function() {
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
process.exit(0);
/**
 * Created by Vitaly on 30.08.2017.
 */
