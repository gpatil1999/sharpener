let getA = a => a;

console.log(getA(1));

var a = 2;

let square = () =>{ return a*a;}  //let square = _ =>{ return a*a;}

console.log(square());

let mult = (a,b) =>{ return a*b;}

console.log(mult(2,4));
var x = function(){
    var that = this;
    this.val = 1;
    setTimeout(()=>{
        that.val++;
        console.log(this.val)
    },1)
};

var xx = new x();

var y = (...n) =>{
    console.log(n[0]);
}

y(1,2,3);
