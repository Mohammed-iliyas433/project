const a={
    a:10,
    b:20,
    sum:function(){
        console.log(this.a+this.b)
    }
}
const b={
    c:5,
    d:6,
    multiply:function(){
        console.log(this.c*this.d)
    }
}
b.__proto__=a;