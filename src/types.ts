type User1 = {
	firstName: string;
	lastName: string;
	age: number
}

// const idOrNumber = ()


/* unions */
//declare types this way  or this way in function itself ( (number | string) )
type GreetArg =  number | string ;


const greet1 = (id: GreetArg) => {
    console.log(`id ${id}`);
}

greet1(1);
greet1("2");