const a=[-5,6,8,10,1]
let b=10;

function binary(a,b){
    let start=0;
    let end=a.length-1;
    while(start<=end){
        let mid=start+Math.floor((end-start)/2)
        if(a[mid]==b){
            return mid
        }
        if(a[mid]<b){
            start=mid+1
        }
        else{
            end=mid-1
        }
    }
    return -1
}
const res=binary(a,b);
if(res==-1){
    console.log("Element not found at index")
}
else{
    console.log("Element found at",res)
}