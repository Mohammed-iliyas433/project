const a=[1,2,3];
const b=a.map(x=>x*x)
console.log(b)

const c=[
    {
        first:"Mohammed",
        last:"iliyas"
    }
]
const y=c.map(d=>d.first)
console.log(y)

let q=[2,3,4,5,6]
let w=q.filter(x=>x%2==0)
console.log(w)

const i=[
    {
        first:"MI",
        marks:56
    },
    {
        second:"CSK",
        marks:65
    },
    {
        third:"RCB",
        marks:10
    }

]
let v=i.filter(p=>p.marks>10);
console.log(v)