// /**
//  * Created by Vitaly on 09.07.2017.
//  */
// // var ourPlenet = "Земля";
// // var userName = "Петя"
// //
// // var arr = [1, "father", [8, 97], true, undefined, null, {age}];
// // console.log(typeof arr[0]);
// // console.log(typeof arr[1]);
// // console.log(typeof arr[2]);
// // console.log(typeof arr[3]);
// // console.log(typeof arr[4]);
// // console.log(typeof arr[5]);
// // console.log(typeof arr[6]);
// var woman = parseInt("0001", 2);
// var legs2 = parseInt("0010", 2);
// var hasTeayh = parseInt("0100", 2);
// var hasCat = parseInt("1000", 2);
//
// var dasha = woman | legs2; //| hasTeayh;
// dasha = dasha | hasCat;
// var vitaly = legs2 | hasTeayh;
// var dv = dasha << 4 | vitaly;
// // var h = dasha & hasTeayh;
// // if (dasha & hasTeayh) {
// //     console.log("У даши есть зубы");
// // }
// var v = dv >> 4;
// if (v & legs2) {
//     console.log("У Виталика есть ноги");
// }
// console.log(dasha);
// console.log(dasha.toString(2));
// console.log(vitaly);
// console.log(vitaly.toString(2));
// console.log(dv);
// console.log(dv.toString(2));
//
// // console.log(h.toString(2));
var t = "3";
console.log(++t);
for (var i = 0, c = 0, j = 1; i < 10; i++, c += 2, j += 2) {
    console.log("c =", c, "j =", j);
}
process.exit(0);