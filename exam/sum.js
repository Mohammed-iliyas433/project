
/*Write a function that takes an array of numbers and returns the sum of all the numbers*/

/*Create an HTML page with a button and an empty div. When the button is clicked, 
add a new paragraph with the text "Hello, World!" inside the div.*/
/*const v=document.getElementById("bu")
v.addEventListener("click",on)
function on(){
    const a=document.createElement("p")
    a.innerHTML="Hello, World!"
    const q=document.getElementById("d");
    q.appendChild(a)
}*/
/*Create a JavaScript object called person with the properties name (string), age (number), and city (string).
 Write a function printPerson that prints each property of the object.*/
 /*const a={
    NAME:"Mohammed",
    Age:45,
    City:"Hyderabad"
 }
 function printPerson(){
    console.log(``)
 }
 printPerson()*/
 /*'https://dummyjson.com/products'*/
 const a=fetch("https://dummyjson.com/products")
 a.then(response=>response.json())
 a.then(res=>console.log(res))