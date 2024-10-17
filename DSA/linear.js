let b=2;
let a=[3,1,2];
const v=li(a,b)
function li(a,b){
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            return `${i}`
            break
        }
    }
    return `not`
}
console.log(v)
