"use strict";

console.log(4 + +"5"); /*  + kotoryj stavitsya pered chem-to, nazyvaetsya unarnym pliusom. 
i takzhe prevrashyaet element v cifrovoj i pozvolyaet slozhitsya--9. esli odin plius budet,
to eto budet STRING i na vyhode vyjdet 45 */


// incr     decr

let incr = 10,
    decr = 10;


    incr++; /*  operator uvelichenija na edenicu */
    decr--; /*  operator umenshenija na edenicu */
    console.log(incr); /* poluchaem 11 */
    console.log(decr);/* poluchaem 9 */



++incr; /* Eta forma zapisi,kogda +/- stavyatsya pered operatorom nazyvaetsya "prefixnoj" */
--decr;

 incr++; /* Takaja forma zapisi nazyvaetsya 'postfixnoj */
 decr--;


let incr = 10,
    decr = 10;


console.log(incr++);
console.log(decr--); 
/* ..............postfixnaja konstrukcija snachala vozvrashyaet pervonochalnoe znachenie,a potom proizvodit operaciju
To est v consoli my snachala uvidim 10*/

 console.log(++incr);
 console.log(--decr); 
// ..............prefixnaja konstrukcija otrabotaet snachala komandu i my poluchim 11 i 9




// Operator %. vozvrashyaet ostatok posle provedenija vychislaenija
console.log(5%2); 


// operator "=" my prisvaivaem kakoe-to znachenie. 
const imya = "Alex";



// Operator "=="    tut my sravnivaem
 console.log(2*4 == 8);   Otvet: true
 console.log(2*4 == '8');  Otvet: true. hotya zdes 8 v kavychkah i eto String.
 console.log(2*4 === '8');   eto Strogoe sravnenie. Po tipu dannyh (cifra i stroka) otvet: false


// operator
  &&   (and ili po-russki i). Rabotaet tolko kogda oba argumenta javlyajutsya true: i eto pravda, i eto pravda.)
  ||     ili

const isChecked = true,
        isClose = true;

console.log(isChecked  || isClose);   otvet: true. Eti operatory ochen chasto isplozukutsya

// "!" -eto operator otricanija. on menyaet true na false and vice versa.console.log(isChecked  || !isClose)

// Posledovatelnost Operatorov

console.log(2 + 2 * 2 == 6);   snachal umnozhaem,potom pribavlyaem

console.log(2 + 2 * 2 != 8); zdes pojavilsya znak otricanija "!" i my imeem,chto 6 ne rovno 8,znachit otvet v consoli: true