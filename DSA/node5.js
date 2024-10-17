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
function il(data){
    let ol=new Node(data)
    let n=head
    while(n.next!=null){
        n=n.next
    }
    n.next=ol
}
il(4)
function pl(head){
    let current=head
    while(current!=null){
        console.log(current.data)
        current=current.next
    }
}
pl(head)