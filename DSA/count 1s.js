let a=[1,1,1,0];
function ar(a){
    let start=0;
    let end=a.length-1
    while(start<=end){
        let mid=start+Math.floor(start+(end-start)/2)
        if(a[mid]==0){
            end=mid-1
        }
        else if(a[mid]==1 && a[mid+1]==1){
            start=mid+1
        }
        else if(a[mid]==1 && (a[mid+1]==1 || mid==a.length-1)){
            return mid+1
        }
    }
    return -1;

}
const res=ar(a)
if(res==-1){
    console.log("There are no 1s in array")
}
else{
    console.log("Number of 1s in array",res)
}