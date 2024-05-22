class stud{
    constructor(name,email){
        this.name;
        this.email;
    }
    get info(){
        return this.name
    }
    printDetails(){
        console.log(`my name is ${this.name} and my email is ${this.email}` );
    }
}
const Student=new stud("Mohammed Iliyas","Mi1760548@gmail.com");
console.log(Student)
