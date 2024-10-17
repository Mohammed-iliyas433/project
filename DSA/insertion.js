let a=[3,2,1]
let b=a.length
function i(a,b){
    let key,j;
    
    for(let i=1;i<b;i++){
        key=a[i]
        j=i-1
        while(j>=0 && a[j]>key){
            a[j+1]=a[j]
            j--
        }
        a[j+1]=key;
    }
    return a
}
const res=i(a,b)
console.log(res);