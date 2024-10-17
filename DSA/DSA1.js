let a=[4,2,1,1,2]
let max=a[0]
let b=1
for(let i=0;i<a.length;i++){
    if(a[i]>max){
        max=a[i]
    }
}
for(let i=0;i<a.length;i++){
    if(a[i]+b>=max){
        console.log("True")
    }
    else{
        console.log("False")
    }
}