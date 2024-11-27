interface User{
    firstName: string,
    lastName: string,
    age: number
}

function isLegall(user: User){
    if(user.age > 18){
        console.log("legal");
        return 
    }
    console.log("Not legal");
}

function userName(user: User){
    console.log(`firstName is : ${user.firstName}`);
};

isLegall({
    firstName: "Farooq",
    lastName: "Basha",
    age: 3
});

userName({
    firstName: "Farooq",
    lastName: "Basha",
    age: 3
})