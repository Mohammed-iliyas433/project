async function fetchDataresponse(){
    const a= await fetch("https://dummyjson.com/products/1");
    const result= await a.json()
    console.log(result);
}
fetchDataresponse()