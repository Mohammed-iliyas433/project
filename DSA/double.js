var head
class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}
function push(data){
    let c=new Node(data)
    if(head==null){
        head=c
        return
    }
    c.next=head
    head.prev=c
    head=c
}
push(1)
push(2)
push(3)
function pl(head){
    let c=head
    while(c!=null){
        console.log(c.data)
        c=c.next
    }
}
pl(head)