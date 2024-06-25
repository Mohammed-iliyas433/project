function create(name,callback){
    setTimeout(()=>{
        const a=`hello ${name}`;
        callback(a);
    },1000);
}
function display(a){
    console.log(a);
}
const a=create('MI',display);
