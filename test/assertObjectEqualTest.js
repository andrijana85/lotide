const assertObjectEqual = require('../assertObjectEqual');


const obj1 = {a: '1', b: 2 };
const obj2 = {a: '3', b: 2 };
const obj3 = {a: '1', b: 2 };
assertObjectEqual(obj1, obj2);
assertObjectEqual(obj1, obj3);
assertObjectEqual(obj1, obj1);