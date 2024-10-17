function s(n){
    if(n==1)
        return 1
    return n+s(n-1)
}
const r=s(10)
console.log(r)