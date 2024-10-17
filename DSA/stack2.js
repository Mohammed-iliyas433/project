const a=new Array(5);
let top=-1;
let r=a.length-1
function push(data){
    top++
    if(top>r){
        console.log(`Stack is full ${data} cannot be pushed`);
        return false;
    }
    a[top]=data
    return true;

}
function pop(){
    if(top<0){
        console.log("Stack is empty")
        return false
    }
    else{
        let x=a[top]
        top--
        return x
    }
}
push(1)
push(2)
push(3)
push(4)
push(5)
pop()
pop()

function pl(){
    for(let i=top;i>=0;i--){
        console.log(a[i]);
    }
}

pl()