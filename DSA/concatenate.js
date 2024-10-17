let a=[1,2,3];
let j=a.length
for(let i=0;i<j;i++){
    a[j+i]=a[i]
}
for(let i=0;i<a.length;i++){
    console.log(a[i])
}