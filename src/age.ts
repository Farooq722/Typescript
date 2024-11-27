function isLegal(a: number): boolean{
    if(a > 18)
        return true;
    return false;
}

let x = isLegal(15);
console.log(x);