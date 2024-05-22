const a=document.querySelector(".one");

const b=document.querySelector(".two");
console.log(b)
const c=document.querySelector(".three");
console.log(c)
const d=document.querySelector(".four");
console.log(d);
const todoList=document.querySelector(".todolist")
const but=document.querySelector("button");
but.addEventListener("click",addto);
function addto(){
    
    const tododiv=document.createElement("div");
    tododiv.classList.add("fl");
    /*tododiv.classList.add("para1");*/
    /*tododiv.classList.add("para2");*/
    /*tododiv.classList.add("para3");*/
    /*tododiv.classList.add("para4");*/
    tododiv.classList.add("todolist");
    if (a.value=='' || b.value=='' || c.value=='' || d.value=='') return;
   /* const del=document.createElement("button");
    tododiv.appendChild(del);*/
    const para1=document.createElement("para");
    para1.innerHTML=a.value;
    para1.classList.add("para1")
    tododiv.appendChild(para1)
    /*console.log(para1)*/
    const para2=document.createElement("para");
    para2.innerHTML=b.value;
    para2.classList.add("para2")
    tododiv.appendChild(para2)
    /*console.log(para2)*/
    const para3=document.createElement("para");
    para3.innerHTML=c.value;
    para3.classList.add("para3")
    tododiv.appendChild(para3)
    /*console.log(para3)*/
    const para4=document.createElement("para");
    para4.innerHTML=d.value;
    para4.classList.add("para4")
    tododiv.appendChild(para4)
    /*console.log(para4)*/
    todoList.appendChild(tododiv);
    const del=document.createElement("button");
    tododiv.appendChild(del);
    del.classList.add("dell");
    del.innerHTML="Delete"
    console.log(tododiv)
    
    tododiv.classList.add("del");
    a.value='';
    b.value='';
    c.value='';
    d.value='';


}
todoList.addEventListener("click",adding);
function adding(e){
    const item=e.target;
    console.log(item);
    if(item.classList[0]=="dell"){
        const parent=item.parentNode;
        parent.remove();
    }
}