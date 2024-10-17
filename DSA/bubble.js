let a=[2,3,1,4];
let n=a.length;
let temp;
function bubble(a,n){
    
    for(let i=0;i<n;i++){
        let swapped = false;
        for(let j=0;j<n-i-1;j++){
            if(a[j]>a[j+1]){
                temp=a[j];
                a[j]=a[j+1]
                a[j+1]=temp
                swapped=true
            }
        }
        if(swapped==false){
            break;
        }
    }
   
}
bubble(a,n)
console.log(a)