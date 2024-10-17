const a={
    first:"Mohammed",
    Last:"iliyas"
}
let v=function(food){
    console.log(`Hii my name is ${this.first} ${this.Last} and my favourite food is ${food} `);
}
v.call(a,"Biryani")
const b={
    first:"Aman",
    Last:"Gupta"
}
v.call(b,"Paneer Butter Masala")
const c={
    first:"Dahagam",
    Last:"Vighnesh"
}
v.apply(c,["Burger"])
