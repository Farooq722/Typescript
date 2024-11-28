type user = {
    name: string,
    password: string,
    email: string
}

const userss = new Map<string, user>();

//sytanx 
/*
    map<string, object>
    insert values in like
    obj.set(key,{obj types});
*/
userss.set("farooqq", { name: "farooq", password: "skjdfsd", email: "farooq@gmail.com"});
userss.set("faro", { name: "fara", password: "skjdaffsd", email: "fara@gmail.com"});

// to get single value
// console.log(userss.get("faro"));

// to get all values of users
console.log(userss);