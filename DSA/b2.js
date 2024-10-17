class tree{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}
function ino(node){
    if(node==null)
        return
    ino(node.left)
    console.log(node.data)
    ino(node.right)
}
let root=new tree(1)
root.left=new tree(2)
root.right=new tree(3)
root.left.left=new tree(4)
root.left.right=new tree(5)
root.right.left=new tree(6)
root.right.right=new tree(7)
ino(root)