'use strict';

/////////////////////////////////////////////////
// 产生数据
/////////////////////////////////////////////////

var _this = this;

/**
 * 产生随机整数随机数组 - 同步
 *
 * @param num Number 个数
 * @param min Number 最小值
 * @param max  Number 最大值
 */
exports.randomData=function(n,min,max){
    n=n||1000;
    min=min||0;
    max=max||100;

    var diff = max-min;
    var data = [];
    for(var i=0;i<n;i++){
       data.push(Math.round(Math.random(1)*diff));
    }
    return data;
}