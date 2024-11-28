interface User11{
    name: string,
    age: number
};

function sumOfAge(user1: User11, user2: User11){
    return user1.age+user2.age;
};

const age = sumOfAge({ name: 'farooq', age: 20 }, { name: 'gb', age: 30 });  
console.log(age);