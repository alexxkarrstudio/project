"use strict";

// alert('aaa'); Prostoj vyvod alert

  const result = confirm("are you here?"); /* otvet na etot vopros zapisyvaetsya v peremennuju "result" */


const answear = prompt("are you 18?", "18");/* "18" eto placeholder,kotoryj my pokazyvaem */

  console.log(answear); */  /*  Vsya informacija,kotoruju my poluchim ot polzovatelej budet 
prihodit v vide strok (string). 'typeof--eto operator,kotoryj pokazyvaet,chto ispolzovalos,nomer ili stroka*/

  const answear = +prompt("are you 18?", "18"); */ /* + dealet override i prevrashayet string v cifru */

  console.log(answear + 5);  /* slozhit 18+5. esli bez + u promt,to console vosprimet prompt,
  kak stroku i prosto ryadom dobavit cifru i vyjdet 183 */

const answears = []; /* Sozdali peremennuju "answears, v kotoruju pomestili pustoj massiv" */

answears[0] = prompt('whats your name?','');
answears[1] = prompt('whats your  last name?','');
answears[2] = prompt('whats your age?','');

document.write(answears);  /* ustarevshij variant */