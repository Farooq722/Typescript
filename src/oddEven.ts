function oddEven(a: number): string{
    if(a%2 == 0)
        return "Even";
    return "Odd";
}

const num = oddEven(5);
console.log(num);