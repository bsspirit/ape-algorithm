APE: 算法工具包
========================

支持普通数组的排序和数组对象的排序。

http://blog.fens.me/algorithm-quicksort-nodejs/

## INSTALL

```{bash}
npm install ape-algorithm
```

## API

+ quicksort.js      快速排序
+ insertionsort.js  插入排序
+ bucketsort.js     桶排序
+ data.js           产生随机数据
+ rowcol.js         对JSON数据的行列转换


## Demo

example.js

普通数组快速排序
```{bash}
var arr = [23,12,11,43,54,43,2,12,66];
console.log(arr);
console.log(algo.quicksort.sort(arr));
console.log(algo.quicksort.sort(arr,'desc'));

//output
[ 23, 12, 11, 43, 54, 43, 2, 12, 66 ]
[ 2, 11, 12, 12, 23, 43, 43, 54, 66 ]
[ 66, 54, 43, 43, 23, 12, 12, 11, 2 ]
```
对象数组快速排序，按id值大小排序
```{bash}
var arrObj = [{name:'b',id:12},{name:'c',id:21},{name:'a',id:2}];
console.log(arrObj);
console.log(algo.quicksort.sortObj(arrObj,'id','asc'));
console.log(algo.quicksort.sortObj(arrObj,'id','desc'));

//output
[ { name: 'b', id: 12 },{ name: 'c', id: 21 },{ name: 'a', id: 2 } ]
[ { name: 'a', id: 2 },{ name: 'b', id: 12 },{ name: 'c', id: 21 } ]
[ { name: 'c', id: 21 },{ name: 'b', id: 12 },{ name: 'a', id: 2 } ]
```


## License

MIT

