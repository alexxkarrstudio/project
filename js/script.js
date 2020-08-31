"use strict"; /*  Objavlenie,chto my rabotaem v novom standarte */

// a = 15;  Esli ubrat use strict, to takoe objavlenie peremennoj srabotaet. s nim vydast oshibku
 

let number = 5; /* Pervyj sposob objavit peremennuju. My sozdali korobochku,dali ej imya i prisvoili ej znachenie 5*/
// Let--oznachanet,chto informacija izmenyaemjaja. My mozhem vytashit 5 i polochit tuda liubuju druguju info

const leftBorderWidth = 1;/* Takoe nazvanie peremennoj nazyvaetsya Camel case. Vtoroj sposob objavlenija */
// Const pomenyat nelzya.

number = 10;/* My obrashyaemsya k LET s imenem "number" i govorim polozhit tuda "10" vmesto "5" */

const obj = {
    a: 50
};

obj.a = 10;
console.log(obj);
// Etot primer pokazyvaet,chto pryamyh constant v JS ne byvaet.



/* My zaprosili peremennuju do togo,kak ona byla sozdana */

var name = 'Ivan'; /*  Eto 3 sposob objavlenija peremennoj.Bukvy vsegda berytsya v kavychki.
Ne ispolzuem,tak kak mozet proishodit hoisting(vsplytie peremennoj) */

{
    var result = 50;
}
name = "asd";


console.log(result);
