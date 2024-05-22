const a=[1,2,3]
function square(a){
    return a*a;
}
const r=a.map(square);
console.log(r);

const n=[
    {
        first:"Mi",
        jersey:7
    }
]
const u=n.map(n =>n.first);
console.log(u);