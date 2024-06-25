async function fetchData(){
    try{
        const r=await fetch("https://jsonplaceholder.typicode.com/posts");
        const d=await r.json();
        return d;
    }catch(error){
        console.error("errpr")
    }
}
async function ren(){
    const con=document.getElementsByClassName('.box');
    const d=await fetchData();
    if(!d){
        return;
    }
    d.forEach(item=>{
        const b=document.createElement('p');
        b.textContent=item.b;

        con.appendChild(b);
    });
}

ren()