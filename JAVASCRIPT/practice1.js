const c=document.createElement("p");
c.innerHTML="MI";
const d=document.getElementById("one")
d.appendChild(c)
const e=document.createElement("p")
e.innerHTML="I";
d.appendChild(e);
const n=document.createElement("button");
n.innerHTML="Click me"
d.appendChild(n);
document.querySelector("button").addEventListener("click",function(){
    document.querySelector("textarea").innerHTML="MI"
})