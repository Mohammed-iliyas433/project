class queue{
    constructor(n){
        this.size=n;
        this.queue=new Array(this.size)
        this.front=-1
        this.rear=-1
    }
    enqueue(data){
        if(this.rear==this.size-1){
            console.log("Full")
            return
        }
        if(this.front==-1){
            this.front=0
        }
        this.rear++
        this.queue[this.rear]=data
        return
    }
    isEmpty(){
        if(this.front==-1 && this.rear==-1){
            console.log("empty")
            return true
        }
        return false
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("Cannot")
            return
        }
        for(let i=this.front;i<=this.rear-1;i++){
            this.queue[i]=this.queue[i+1];
        }
        this.queue[this.rear]=0
        this.rear--
        return
    }
    pl(){
        if(this.front==-1 && this.rear==-1){
            console.log("empty")
            return
        }
        for(let i=this.front;i<=this.rear;i++){
            console.log(this.queue[i])
        }
    }
}
let neww=new queue(5);
neww.enqueue(1);
neww.enqueue(2);
neww.enqueue(3);
neww.enqueue(4);
neww.dequeue()
neww.pl()