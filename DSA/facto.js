function fact(n){
    if(n==1)
        return 
    return n*fact(n-1)
}
const r=fact(5)
console.log(r)