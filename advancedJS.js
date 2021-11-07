var obj = {num : 2};

var add = function(a,b,c){
    return this.num + a+b+c;
};

var ans = add.call(obj,1,2,3);
console.log(ans);

var arr = [1,2,3];

ans = add.apply(obj,arr);
console.log(ans);


var bound = add.bind(obj);
ans = bound(1,2,3);
console.log(ans);

var student = {age : 20};
var showage = function(){
    console.log(this.age);
}

showage.call(student);