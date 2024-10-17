class Stack{
    constructor(data){
        this.top=-1
        this.size=data;
        this.arr=new Array(this.size)
    }
    push(data){
        this.top++
        if(this.top>this.size-1){
            console.log("Cannot fill")
            top--
            return
        }
        this.arr[this.top]=data
    }
    pop(){
        if(this.top<0){
            console.log("EMpty")
            return
        }
        let x=this.arr[this.top]
        this.top--
        return x
    }
}
function reverse(str){
    let l=str.length;
    const v=new Stack(l)
    for(let i=0;i<l;i++){
        v.push(str[i])
    }
    let rever=""
    for(let i=0;i<l;i++){
        let x=v.pop()
        rever=rever.concat(x)
    }
    return rever
}
const rever=reverse("MI")
console.log(rever)