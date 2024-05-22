//Default parameters//
function a(c,b){
    var b=5;
    console.log(c+b);
}
a(2,3)
//Spread synatax
function sum(a,b){
    console.log(a+b);
}
const q=[2,3];
const d=sum(...q);
//Rest parameters//
function SON(...args){
    let s=0;
    for(let i of args){
        s=s+i;
    }
    return s;
}
const x=SON(1,2,3);
console.log(x);
