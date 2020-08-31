"use strict";
// 1 tip dannyh: chisla
let number = 4.6;

// console.log(-4/0);
// console.log('string' *9);

// 2 tip dannyh: stroka. vsegda pishetsya v kavychkah

const person = ('Alex');


// 3 tip dannyh : bulinovye

const bool = true;

// 4 tip dannyh: null

// console.log(something); /* My zaprosili peremennuju,kotoroj ne sushstvuet. NaN */

// 5 tip dannyh: undefined

let boom;
console.log(boom);/*  My sozdali pustuju korobku inichego v nee ne polozhili. 
Potom zaprosili pokazat,chto tam est.Tam nichego: undefined */


// OBJEKTY - compleksnye hranilishya informacii.Soderzhit v sebe dannye objekta i ego svojastva.
// Naprimer: kruglyj i prygaet.

const obj = {
    name: 'Alex', /* Kliuch: objekt,gde kliuch--name,objekt--Alex */
    age: 25,
    isMarried: false  /* Eto vse svojstva objekta */
};
// console.log(obj['name']); /* Mozhem obratitsya  cherez tochku ili figurnye skopki k opredelennomu svojstvu */
console.log(obj.name);

// Massive-eto chastnyj sluchaj objekta,ego raznovidnost. Objekt - eto kliuchevaja edenica JS

let arr = ['plum.png', 3, 'apple.jpg', 'orange.bmp', {}, []];  /* Eto primer massiva. V nem mozgut soderzhatsya 
ljubye tipy dannyh,
vkliuchaja drugie massivy,objekty itd */
console.log(arr[3]); /* Tak my mozhem obratitsya k liubomy elementu vnutri massiva. Obrashyaemsya tolko po poryadku,
kak oni idut.
 POryadok nachinaetsya s 0,a ne edenicy */
//  Massiv tozhe rabotaet po principu "kliuch:objekt". Tak kak v nem prosto perechisleny dannye,to kliuchom kak raz 
//  javlaetsya poryadkovyj nomer,pod kotorym idut dannye: 0(key) plum.jpg(object)


