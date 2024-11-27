function callback(cb1: ()=> void, cb2: ()=> void): string {
    cb1();
    cb2();
return "done";
}

callback(cb1, cb2);

function cb1(){
    console.log("hey im cb1");
}
function cb2(){
    console.log("im cb2");
}