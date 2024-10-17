let c=0;
function a(){
    c++
    console.log(c)
    if(c>4){
        return
    }
    a()
}
a()