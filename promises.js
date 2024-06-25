
/*https://dummyjson.com/posts*/
/*const prom=fetch("https://dummyjson.com/posts")
prom.then(response=>response.json())*/



// function add(){
//     var element=document.createElement("input")
//     var text=document.getElementById("lol");
//     text.appendChild(element)
//     fetchData()
// }



// function fetchData(){
//     fetch("https://dummyjson.com/posts")
//     .then(response=>response.json())
//     .then(data=>{
//         displayData(data)
//     }).catch(error=>{
//         console.error('Error',error)
//     });
// }
// function displayData(data){
//     const result=document.getElementById("lol");
//     const er=document.createElement("div");
//     er.innerHTML=`<p>${data.posts}</p>`
//     er.appendChild(result);
// }

const o=document.getElementById("but");
o.addEventListener("click",fun);
function fun(){
    const x=document.createElement("textarea");
    x.innerHTML="Loading after 5sec";
    
    const y=document.getElementById("lol");
   
    x.classList.add(".dv");
    y.appendChild(x);
    setTimeout(()=>{
        fetchData()
    },5000)
   
}
function fetchData() {
    
    fetch("https://dummyjson.com/posts")
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayData(data) {
    const result = document.getElementById("lol");
    const posts = data.posts;
    console.log(posts);
    result.innerHTML = '';
    posts.forEach(post => {
        const inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.value = `${post.title} - ${post.body}`; // Combine title and body

        result.appendChild(inputElement);
    });
}

