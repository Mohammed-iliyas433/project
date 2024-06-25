function first(value,callback){
    setTimeout(()=>{
        const r=value+1
        callback(r);
    })
    
}
function second(value,callback){
    setTimeout(()=>{
        const r=value+2;
        callback(r);
    })

}
/*function doo(){
    let r=0;
    r=first(r)
    r=second(r)
    console.log(`r=${r}`)
}*/
function doo(){
    first(0,r=>{
        second(r,r1=>{
            console.log(r1);
        })
    })
}

doo()