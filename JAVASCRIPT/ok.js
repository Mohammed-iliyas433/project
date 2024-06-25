const promise=new Promise(function(resolve,reject){
    setTimeout(()=>{
        const a=fetch("https://dummyjson.com/posts");
        const result=a.then(response=>response.json()).then(res=>console.log(res));
    })
})
//https://dummyjson.com/posts//