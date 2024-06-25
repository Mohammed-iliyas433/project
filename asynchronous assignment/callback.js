
/*https://dummyjson.com/posts*/
/*const prom=fetch("https://dummyjson.com/posts")
prom.then(response=>response.json())*/



function add(){
    var element=document.createElement("input")
    var text=document.getElementById("lol");
    text.appendChild(element)
    fetchData()
}

function fetchData(){
    const p=fetch("https://dummyjson.com/posts");
    p.then(response=>response.json()).then(data=>console.log(data))
}

/*function fetchData(){
    fetch("https://dummyjson.com/posts")
    .then(response=>response.json())
    .then(data=>{
        displayData(data)
    }).catch(error=>{
        console.error('Error',error)
    });
}*/
/*function displayData(data){
    const result=document.getElementById("lol");
    const er=document.createElement("div");
    er.innerHTML=`<p>${data.posts}</p>`
    er.appendChild(result);
}*/