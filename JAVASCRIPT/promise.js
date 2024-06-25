const promise=new Promise(function(resolve,reject){
    let a;
    setTimeout(()=>{
        a=15;
        if(a>10){
            resolve("Sucses")
        }
        else{
            reject("rejected")
        }
    },1000)
});
promise.then(result=>console.log("YES"))
promise.catch(err=>console.log("NO"))