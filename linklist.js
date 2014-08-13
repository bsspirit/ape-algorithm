//https://github.com/joyent/node/blob/master/lib/_linklist.js
//var L = require('_linklist');
//
//var list ={};
//L.init(list);
//console.log(L.isEmpty(list));
//L.append(list, "a");
//L.append(list, "b");
//L.append(list, "c");
//L.append(list, "d");
//console.log(L.isEmpty(list));
//
//console.log(L.peek(list));
////console.log(L.shift(list));
////console.log(L.shift(list));
////console.log(L.shift(list));
////console.log(L.peek(list));
////console.log(L);
//
//console.log(list);
//console.log(list._idlePrev );
//console.log(list._idleNext  );


var L = require('linklist');
var list = L.init();
L.append(list, {a:1});
L.append(list, {a:3});
L.append(list, {a:7});
L.append(list, {a:9});

var x={a:2};

var insert = false;
L.traversal(list, function(item) {
    console.log(item.a);
    if(x.a<item.a){
        L.append(item, x);
        insert=true
        return;
    }
});
if(!insert){
    L.append(list, x);
}

console.log("========================");
L.reTraversal(list, function(item) {
    console.log(item.a);
});


//L.clear(list);
//L.isEmpty(list);

