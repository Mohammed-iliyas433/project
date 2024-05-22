const ob={
    names: ["DV","MI"],
    age:15,
    Franchise:{
        CSK:5,
        MI:5,
    },
    m:function(){
        console.log("MI");
    },
    n:function(a,b){
        console.log(a+b);
    }
};
console.log(ob.names);
ob.n(2,3);
ob.m();
ob.farewell=function(){
    console.log("Good bye 2k24");
}
console.log(ob)