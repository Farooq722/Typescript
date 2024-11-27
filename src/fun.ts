function fun1(fn: () => void){
    setTimeout(fn,1000);
}

fun1(function(){
    console.log("called");
})