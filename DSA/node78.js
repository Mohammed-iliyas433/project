class node{
    constructor(key){
        this.data=key
        this.left=null
        this.right=null
    }
}
var root=null;
function isert(data){
    root=isertr(root,data)
}
function isertr(root,data){
    if(root==null){
        root=new node(data)
        return root
    }
    if(data<root.data){
        root.left=isertr(root.left,data)
    }else if(data>root.data){
        root.right=isertr(root.right,data)
    }
    return root
}
function ino(root){
    if(root==null)
        return
    ino(root.left)
    console.log(root.data)
    ino(root.right)
}
isert(50)
isert(40)
isert(45)
isert(55)
isert(60)
ino(root)