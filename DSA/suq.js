class Stack{
    constructor(){
        this.q1=[];
        this.q2=[];
    }
    push(x){
        this.q2.push(x)
        while(this.q1.length!=0){
            this.q2.push(this.q1[0])
            this.q1.shift()
        }
        this.q=this.q2
        this.q1=this.q2
        this.q2=this.q
    }
    pop(){
        const e=this.q1[0]
        this.q1.shift()
        return e
    }
    top(){
        return this.q1[0]
    }
    pl(){
        for(let i=0;i<this.q1.length;i++){
            console.log(this.q1[i])
        }
    }
}
let stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
const popp=stack.pop()
console.log(popp)
const topp=stack.top()
console.log(topp)