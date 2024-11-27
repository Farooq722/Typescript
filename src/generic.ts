// type Input = number | string;

// function first(arr: Input[]){
//     return arr[0];
// }

// const value1 = first(["farooq", "basha"]);

// console.log(value1.toUpperCase());



function identity<T>(arg: T){
    return arg;
}

const output1 = identity<string>("Farooq");
const output2 = identity<number>(505);

console.log(output1)
console.log(output2)

function identity1<T>(arg: T[]): T{
    return arg[0];
}
const el = identity1([5,4,9]);

console.log(el);