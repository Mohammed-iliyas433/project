const a=fetch("https://dummyjson.com/products/1");
console.log(a)
a.then(response => response.json()).then(res => console.log(res));