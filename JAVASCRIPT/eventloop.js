console.log("hii");
setTimeout(()=>{
    console.log("Mohammed iliyas")
},1000)
console.log("I am");
// In eventloop when JS engine runs then in call stack there will be GEC in which we have settimeout
//it will send it to webapi and timers starts there till that call stack is executed when call stack is empty it checks for callback queue if there is settime out function from web api then it is passed to call stack and executed