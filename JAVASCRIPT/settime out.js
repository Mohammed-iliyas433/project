// js is single threaded synchronous language but use of callbacks, promises, event loop it behaves asynchronous
console.log("MI");
setTimeout(() => {
    console.log("asynchonous");
},1000)
console.log("IM");