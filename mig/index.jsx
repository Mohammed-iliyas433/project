import React from "react"
import ReactDom from "react-dom/client"
/*const a=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("p",{},"HII"),
        React.createElement("p",{},"MOM")
    ])
])
const b=ReactDom.createRoot(document.getElementById("root"))
b.render(a)*/

/*const header=React.createElement("h1",{id:"heading"},"this is heading")
let first="internshala";*/
/*const jsg=<h2 id="Learning"> Student Registeration Form using react</h2>
const jsd=(
    <>
        <h1>Hello</h1>
        <form action="">
            <label for="one">Enter your name :</label>
            <input id="one" type="text" placeholder="Enter your name"></input><br /><br />
            <label for="two">Enter your mobile number :</label>
            <input id="two" type="number" placeholder="Enter your mobile number"></input><br /><br />
            <label for="three">Enter your mail id :</label>
            <input id="three" type="mail" placeholder="Enter your mail id"></input><br /><br />
            
        </form>
        
    </>
)
const c=ReactDom.createRoot(document.getElementById("Learning"))
c.render(jsg)
const root=ReactDom.createRoot(document.getElementById("ro"))
root.render(jsd);*/
const Header= () =>{
    return(
        <>
            <h1>HELLO FUnctional Component</h1>
            <h2>GM</h2>
        </>
    

    ); 
};
const one=ReactDom.createRoot(document.getElementById("on"));
one.render(<Header />)

