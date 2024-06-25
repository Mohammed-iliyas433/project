/**
 * https://dummyjson.com/products/1
 * https://dummyjson.com/users/1
 * https://dummyjson.com/posts/1
 */
const first=fetch("https://dummyjson.com/products/1")
                 .then(response=> response.json)
const second=fetch("https://dummyjson.com/users/1")
                .then(response=>response.json)
const third=fetch("https://dummyjson.com/posts/1")
                .then(response=>response.json)
Promise.all([first,second,third])
    .then(responses=>{
        for(const response of responses){
            console.log(response)
        }
    }).catch(err=>console.log("failed"))


Promise.any([first,second,third])
       .then(response=>{
        console.log("ok")
       }).catch(err=>console.log("errors full"))
