'use strict';

//////////////////////////////////////////
// algorithm
//////////////////////////////////////////
var algo = require('./index.js');

//普通数组快速排序
var arr = [23,12,11,43,54,43,2,12,66];
console.log(arr);
console.log(algo.quicksort.sort(arr));
console.log(algo.quicksort.sort(arr,'desc'));

//对象数组快速排序
var arrObj = [{name:'b',id:12},{name:'c',id:21},{name:'a',id:2}];
console.log(arrObj);
console.log(algo.quicksort.sortObj(arrObj,'id'));
console.log(algo.quicksort.sortObj(arrObj,'id','asc'));
console.log(algo.quicksort.sortObj(arrObj,'id','desc'));





