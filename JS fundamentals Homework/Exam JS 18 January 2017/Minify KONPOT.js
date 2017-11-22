/**
 * Created by Kalo on 18.1.2017 г..
 */
function solve(args) {
    var text = "",
        rexEx = /;+/g;

    for (var i = 0; i < args.length; i += 1) {
        text = text + args[i];
    }

    text = text.replace(rexEx, ";");


    console.log(text);
}
// solve([
//     'hello;',
//     '{this; is',
//     ' ; an;;;example;',
//     '}',
//     'of;',
//     '{',
//     'KONPOT;',
//     '{',
//     'Some_numbers;',
//     '42;5;3}',
//     '_}'
// ]);

// Опит за решение след близо 10 месеца :) Днес е 3 октомври 2017год.
// Условието на задачата отново ми се струва безобразно! 30/100 точки.
function minifyKonpot(arr) {
    arr.forEach(function (el, i) {
        arr[i] = el.replace(/\s+/gm, '');   // премахва всики интервали и нови редове.
    });
    let joinedArr = arr.join('');

    joinedArr = joinedArr.replace(/;+/gm, ';');

    joinedArr = joinedArr.replace(/\{[{};]*}/gm, '');
    joinedArr = joinedArr.replace(/;*\{;*/gm, '{');
    joinedArr = joinedArr.replace(/;*};*/gm, '}');
    joinedArr = joinedArr.replace(/\{}+/gm, '');
    joinedArr = joinedArr.replace(/;*\{;*/gm, '{');
    joinedArr = joinedArr.replace(/;$/gm, '');
    joinedArr = joinedArr.replace(/^;/gm, '');

    // console.log(joinedArr);

    let sepNum = (joinedArr.match(/[{;}]/g)).length;    // общ брой на всички '{', '}' и ';'

    // console.log(sepArr + '<separ<');
    let identifierArr = joinedArr.match(/\w+/gm);// joinedArr.split(/[{;}]/);
    // console.log(identifierArr);
    let identMap = new Map();

    for (let ident of identifierArr) {
        let val = +1;// ;
        if (identMap.has(ident)) {
            val = identMap.get(ident) + 1;
        }
        identMap.set(ident, val);
    }

    let valuesArr = Array.from(identMap.values());  // преобразува в масив iterator обекта от стойностите на Map колекцията.
    valuesArr.sort((a, b)=>b - a);  // сортира от най-много към най-малко срещани идентификатори
    // console.log(valuesArr);
    let idNum = +0;
    valuesArr.forEach(function (el, i) {
        if (i > 62) {
            el = el * 2;
        }
        idNum += Number(el);
    });
    // console.log(idNum);
    console.log(idNum + sepNum);
}

minifyKonpot([
    'hello;',
    '{this; is',
    ' ; an;;;example;',
    '}',
    'of;',
    '{',
    'KONPOT;',
    '{',
    'Some_numbers;',
    '42;5;3}',
    '_}'
]);

minifyKonpot([
    '; ;;;jGefn4E5Pvq    ;;  ;  ; ;',
    'tQRZ5MMj26Ov { {    {;    ;;    5OVyKBFu7o1T2 ;szDVN2dWhex1V;1gDdNdANG2',
    ';    ;    ;  ;; jGefn4E5Pvq   ;;    ;p0OWoVFZ8c;;}    ;  ; ;',
    '5OVyKBFu7o1T2   ;  szDVN2dWhex1V ;    ;tQRZ5MMj26Ov    ;  ;   };',
    '1gDdNdANG2    ;   p0OWoVFZ8c ;  jGefn4E5Pvq ;; {;Z9n;;',
    ';1gDdNdANG2;   ;;    ;   ;jGefn4E5Pvq    ;; ;;p0OWoVFZ8c;;    ;;',
    ';',
    'tQRZ5MMj26Ov  ;',
    '{    ;szDVN2dWhex1V;   ;',
    ';   jGefn4E5Pvq   ;  ;  } }}'
]);
minifyKonpot([
    '1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; 12; 13; 14;',
    '15; 16; 17; 18; 19; 20; 21; 22; 23; 24; 25; 26; 27; 28;',
    '29; 30; 31; 32; 33; 34; 35; 36; 37; 38; 39; 40; 41; 42;',
    '43; 44; 45; 46; 47; 48; 49; 50; 51; 52; 53; 54; 55; 56;',
    '57; 58; 59; 60; 61; 62; 63; 64; 65; 66; 67; 68; 69; 70;'
]);

function test(str) {
    console.log(str);

    let mini = str.replace(/;+/g, ';');
    console.log(mini);

    mini = mini.replace(/\{[\{};]*}/gm, '');

    // mini = mini.replace(/;*\{;*/gm, '{');
    // mini = mini.replace(/;*};*/gm, '}');
    // mini = mini.replace(/;*\{;*/gm, '{');
    // mini = mini.replace(/;$/gm, '');
    // mini = mini.replace(/^;/gm, '');
    console.log(mini);
}
// test('a;;{;;{;;};{}{}{{;;}}}b');