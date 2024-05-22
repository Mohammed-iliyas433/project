const user={
    name:"Mohammed iliyas",
    city:"Hyderabad",
    pri:function () {
        console.log(`My name is ${this.name} and I am from ${this.city}`)
    }
}
let q=user.name
console.log(q);