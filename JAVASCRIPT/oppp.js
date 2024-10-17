/*const q=new Promise(function(resolve,reject){
    let a;
    setTimeout(()=>{
        let a=5;
        if(a<10){
            resolve("ok")
        }
        else{
            reject("no")
        }
    },1000)
})
q.then(res=>console.log("okk"))
q.catch(res=>console.log("nooo"))*/
/*const v=fetch("https://dummyjson.com/products/1")
v.then(response=>response.json()).then(res=>console.log(res))*/
async function m() {
    try{
        const y=await fetch("https://dummyjson.com/products/1")
    const c=await y.json()
    console.log(c)
    }catch(error){
        console.log("error")
    }
    
    

}
m()