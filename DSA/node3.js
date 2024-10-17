class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
let head=new Node(1);
let first=new Node(2);
let second =new Node(3);

head.next=first;
first.next=second;
function i(key){
    let ne=new Node(key)
    ne.next=head;
    head=ne;
}
i(5);
function pl(data){
    let current=head;
    while(current!=null){
        console.log(current.data);
        current=current.next
    }
}
pl(head)