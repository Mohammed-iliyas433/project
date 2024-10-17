class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
let head=new Node(1)
let first=new Node(2)
let second=new Node(3)
head.next=first
first.next=second
function de(){
    if(head==null){
        console.log("empty")
        return
    }
    if(head.next==null){
        head=null
        return
    }
    let c=head
    while(c.next.next!=null){
        c=c.next
    }
    let e=c.next
    c.next=null
    e=null
}
de()
function pl(head){
    let current=head
    while(current!=null){
        console.log(current.data)
        current=current.data
    }
}
pl(head)