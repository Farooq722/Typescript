interface Userr {
    id: number,
    name: string
}

type record = Record<string, Userr>

const users: record = {
    "hello1":{ id: 21, name: "farooq"},
    "hello2":{ id: 22, name: "kjsfdsf"}
}

console.log(users);