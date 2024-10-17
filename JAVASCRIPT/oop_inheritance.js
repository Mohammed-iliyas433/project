class cust{
    constructor(name,phone){
        this.name=name;
        this.phone=phone
    }
    pl(){
        return `The name of customer is ${this.name} and mobile number`
    }
}
const v=new cust("MI","+917989556319")
console.log(v)

class vip extends cust {
    constructor(name,phone,VIP){
        super(name,phone)
        this.VIP=VIP;
    }
    
    
}
const z=new vip("MII","+917989556319","GOLD")
console.log(z)