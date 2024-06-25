/*function add(){
    fetchData()
}*/
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
async function fetchData(){
    try{
        const response=await fetch("https://dummyjson.com/posts");
        const data=await response.json();
        displayData(data);
    } catch(error){
        console.error("error");
    }
}
/*fetchData()*/
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




