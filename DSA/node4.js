class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
let head=new Node(1)
let first=new Node(2)
let second=new Node(3)
head.next=first
first.next=second
function il(pre,data){
    let s=new Node(data)
    s.next=pre.next
    pre.next=s
}
il(first,0)
function pl(head){
    let current=head;
    while(current!=null){
        console.log(current.data)
        current=current.next
    }
}
pl(head)