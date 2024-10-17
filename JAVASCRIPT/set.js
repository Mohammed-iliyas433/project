console.log("Hii");
setTimeout(()=>{
    console.log("Mi");
},5000)
console.log("I am")
function a(name,callback){
    setTimeout(()=>{
        const y=(`Hello ${name}`)
        callback(y)
    })
    
}
function i(y){
    console.log(y)
}
const p=a("MI",i)
