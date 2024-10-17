/**Brute force */
/*let a=[1,2,3]
let ans=new Array(a.length).fill(0)
for(let i=0;i<a.length;i++){
    for(let j=0;j<=i;j++){
        ans[i]=ans[i]+a[j]
    }
}
console.log(ans)/**Time complexity is O(n2) */
/**Optimized solution */
let b=[1,2,3]
let m=new Array(b.length);
m[0]=b[0]
for(let i=1;i<b.length;i++){
    m[i]=m[i-1]+b[i]
}
console.log(m)
/**Time complexity is O(n) */