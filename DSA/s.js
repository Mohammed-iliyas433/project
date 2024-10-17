function abc(n){
    if(n>5)
        return
    console.log(n)
    abc(n+1);
    
    
}
abc(1)


function po(a,b){
    if(b==1)
        return a;
    let r=power(a,b)
    return r
}
console.log(po(2,3))