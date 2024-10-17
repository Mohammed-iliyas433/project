class cust{
    constructor(name,phone){
        this.name=name;
        this.phone=phone
    }
    fn(){
        return `The customer name is ${this.name} and mobile number is ${this.phone}`
    }
}
const y=new cust("Mohammed","+917989556319")
console.log(y)