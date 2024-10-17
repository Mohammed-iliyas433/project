const a={
    NAme:"MI",
    age:23,
    gr:function pr(){
        console.log("JD");
    }
}
console.log(a.NAme)
a.gr()
const b={
    c:{
        first:"M",
        last:"I",
    },
}
console.log(b.c.first)
//Bracket Notation
console.log(a["age"])
b.c.first="MI";
console.log(b.c.first)
b.hobby=["CSK"]
console.log(b.hobby)
b.so=function(){
    console.log("MII");
}
console.log(b)
b.so()
