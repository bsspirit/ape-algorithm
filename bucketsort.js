'use strict';

/////////////////////////////////////////////////
// 桶排序
/////////////////////////////////////////////////

var _this = this
    , L = require('linklist');

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
exports.sort = function (arr, count) {
    if (arr.length == 0) return [];
    count = count || (count > 1 ? count : 10);

    // 判断最大值、最小值
    var min = arr[0], max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        min = min < arr[i] ? min : arr[i];
        max = max > arr[i] ? max : arr[i];
    }
    var delta = (max - min + 1) / count;
//    console.log(min+","+max+","+delta);

    //初始化桶
    var buckets = [];

    //存储数据到桶
    for (var i = 0; i < arr.length; i++) {
        var idx = Math.floor((arr[i] - min) / delta); // 桶索引

        if (buckets[idx]) {//非空桶
            var bucket = buckets[idx];
            var insert = false;//插入标石
            L.reTraversal(bucket, function (item, done) {
                if (arr[i] <= item.v) {//小于，左边插入
                    L.append(item, _val(arr[i]));
                    insert = true;
                    done();//退出遍历
                }
            });
            if (!insert) { //大于，右边插入
                L.append(bucket, _val(arr[i]));
            }
        } else {//空桶
            var bucket = L.init();
            L.append(bucket, _val(arr[i]));
            buckets[idx] = bucket; //链表实现
        }
    }

    var result = [];
    for (var i = 0, j = 0; i < count; i++) {
        L.reTraversal(buckets[i], function (item) {
//            console.log(i+":"+item.v);
            result[j++] = item.v;
        });
    }
    return result;
}

//链表存储对象
function _val(v) {
    return {v: v}
}

