const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];


console.log(takeUntil(data1, x => x < 0));
assertArraysEqual(takeUntil(data1,x => x < 0),[ 1, 2, 5, 7 ,2 ]);
assertArraysEqual(takeUntil(data1,x => x === 5),[ 1, 2, 5, 7 ,2 ]);
assertArraysEqual(takeUntil(data1,x => x === 7),[ 1, 2, 5 ]);