class tree{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}
let root =new tree(1);
root.left=new tree(2);
root.right=new tree(3)
console.log(root)