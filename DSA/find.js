let a=[2,3,4,1]
let min=a[0]
let max=a[0]
for(let i=0;i<a.length;i++){
    if(a[i]<=min){
        min=a[i]
    }
    if(a[i]>max){
        max=a[i]
    }
}
console.log(min);
console.log(max)