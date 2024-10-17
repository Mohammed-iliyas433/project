class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
let head=new Node(1);
let first=new Node(2);
let second=new Node(3);

head.next=first;
first.next=second;

function search(head,key){
    let current=head;
    while(current!=null){
        if(current.data==key)
            return true
        current=current.next
    }
    return false
}
const r=search(head,2)
if(r==true){
    console.log("Key found ");
}
else{
    console.log("Key not found")
}