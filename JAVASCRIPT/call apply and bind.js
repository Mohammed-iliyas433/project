const a={
    first:"Mohammed",
    last:"iliyas",
    
}
let printfull=function(color,franchise) {
    console.log(`My name is ${this.first} ${this.last} and my color is ${color}`)
    console.log(`My franchise is ${franchise}`)
}
printfull.call(a,"blue","CSK");
const b={
    first:"Dahagam",
    last:"Vighnesh"
}

printfull.call(b,"RCB");