const first = 'qwertyuiop[]';
const second = 'asdfghjkl;';
const third = 'zxcvbnm,./';

const firVar = first.length;
const secVar = second.length;
const thiVar = third.length;

console.log(first.charAt(first[0]));
console.log(second.charAt(second[0]));
console.log(third.charAt(third[0]));
console.log(first.charAt(first.length-1));
console.log(second.charAt(second.length-1));
console.log(third.charAt(third.length-1));

let searchPosition = first.indexOf('[');
let searchPosition2 = first.indexOf(']');

console.log(firVar, secVar, thiVar, searchPosition, searchPosition2);