class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
function push(data){
    let n=new Node(data)
    n.next=head
    head=n
}
let head=null
function p(){
    let c=0
    let mid=head
    while(head.next !=null){
        head=head.next
        c++

        if(c%2 == 0){
            mid=mid.next;
        }
    }
    return mid
}
for(let i=0;i<=5;i++){
    push(i)
}
const m=p()
console.log(m)