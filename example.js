'use strict';

//////////////////////////////////////////
// algorithm
//////////////////////////////////////////
var algo = require('./index.js');

//普通数组快速排序 - 同步
var arr = [23,12,11,43,54,43,2,12,66];
console.log(arr);
console.log(algo.quicksort.sort(arr));
console.log(algo.quicksort.sort(arr,'desc'));

//对象数组快速排序 - 同步
var arrObj = [{name:'b',id:12},{name:'c',id:21},{name:'a',id:2}];
console.log(arrObj);
console.log(algo.quicksort.sortObj(arrObj,'id'));
console.log(algo.quicksort.sortObj(arrObj,'id','asc'));
console.log(algo.quicksort.sortObj(arrObj,'id','desc'));

//普通数组插入排序 - 同步
var data = [ 7, 36, 65, 56, 33, 60, 110, 42, 42, 94,  59, 22, 83, 84, 63, 77, 67,101 ];
console.log(data);
console.log(algo.insertionsort.sort(data));
console.log(algo.insertionsort.sort(data,'asc'));
console.log(algo.insertionsort.sort(data,'desc'));

//普通数组桶排序 - 同步
var data = [ 7, 36, 65, 56, 33, 60, 110, 42, 42, 94,  59, 22, 83, 84, 63, 77, 67,101 ];
console.log(data);
console.log(algo.bucketsort.sort(data,5));
console.log(algo.bucketsort.sort(data,10));

//产生随机数据
var data = algo.data.randomData(1000*1000,1,100);
console.log(data.length);

//////////////////////////////////////////
//////产生随机数据
//////////////////////////////////////////
//var data = algo.data.randomData(10*100,200,900);
//var s1 = new Date().getTime();
//algo.quicksort.sort(data);
//var s2 = new Date().getTime();
//algo.insertionsort.sort(data);
//var s3 = new Date().getTime();
//algo.bucketsort.sort(data,700);
//var s4 = new Date().getTime();
//
//console.log("quicksort time: %sms",s2-s1);
//console.log("insertion time: %sms",s3-s2);
//console.log("bucket time: %sms",s4-s3);


////////////////////////////////////////
////行列互转
////////////////////////////////////////
var data = [
    { date: 20080102, x1: 1.5916, x2: 1.4916 },
    { date: 20080103, x1: 2.5916, x2: 7.5916 },
    { date: 20080104, x1: 3.5916, x2: 1.5916 }
];
var d2 = algo.rowcol.row2col(data);
//console.log(d2);
var d3 = algo.rowcol.col2row(d2);
console.log(d3);
var d4 = algo.rowcol.col2row2(d2);
console.log(d4);


//var d2 = algo.rowcol.row2col(data,'a','b');
//console.log(d2);
//var d3 = algo.rowcol.col2row(d2,'a','b');
//console.log(d3);









