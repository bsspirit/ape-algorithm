'use strict';

/////////////////////////////////////////////////
// 桶排序
/////////////////////////////////////////////////

var quicksort = require('./quicksort');

var _this = this;

/**
 * 普通数组桶排序,同步
 *
 * @param arr Array 数字数组
 * @param num 桶的个数
 *
 * @example:
 * sort([1,4,1,5,3,2,3,3,2,5,2,8,9,2,1],5)
 * sort([1,4,1,5,3,2,3,3,2,5,2,8,9,2,1],5,0,5)
 */
exports.sort=function(arr,count){
    if (arr.length == 0) return [];
    count=count||(count>1?count:10);

    // 判断最大值、最小值
    var min = arr[0],max = arr[0];
    for(var i=1;i<arr.length;i++){
        min = min<arr[i]?min:arr[i];
        max = max>arr[i]?max:arr[i];
    }
    var delta = (max-min+1)/count;
//    console.log(min+","+max+","+delta);

    //初始化桶
    var buckets = [];
    for (var i = 0; i < count; i++) {
        buckets[i] =[];
    }

    //存储数据到桶
    for (var i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i]-min)/delta)].push(arr[i]);
    }
//    console.log(buckets);

    var result = [];
    for (var i = 0; i < count; i++){
        //快速排序合并桶数据
        result = [].concat(result,quicksort.sort(buckets[i]));
    }
    return result;
}

