'use strict';

/////////////////////////////////////////////////
// 插入排序
/////////////////////////////////////////////////

var _this = this;

/**
 * 普通数组插入排序
 *
 * @param arr Array 数字数组
 * @param dir asc升序、desc降序
 *
 * @example:
 * sort([1,4,2,5])
 * sort([1,4,2,5],'asc')
 * sort([1,4,2,5],'desc')
 */
exports.sort = function (arr, dir) {
    dir = dir || 'asc';
    if (arr.length == 0) return [];

    var i, j , x = 0;
    for (i = 1; i < arr.length; i++) {
        for (j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                x = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = x;
            }
        }
    }
    return dir=="desc"?arr.reverse():arr;
}




