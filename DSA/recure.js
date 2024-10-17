function p(n){
    if(n<10){
        p(n+1)
        console.log(n)
    }
    
}
p(1)
function a(o){
    if(o>1){
        a(o-1)
        console.log(o)
    }
}
a(10)