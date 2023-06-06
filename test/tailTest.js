const tail = require('../tail');
const assertEqual = require('../assertEqual');



const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);
const words1 = ["Yo Yo"];
console.log(tail(words1));
const words2 = [];
console.log(tail(words2));