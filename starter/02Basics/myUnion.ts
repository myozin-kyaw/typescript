let score: number|string = 33

score = 22
score = "Hello"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let myozin: User | Admin  = {name: 'myozin', id: 111}

myozin = {username: 'myozin', id: 111}

function getDbId(id: number | string) {

    typeof id === 'string' ? id.toLowerCase() : id
    
    console.log(`DB id is: ${id}`)
}

getDbId(3)
getDbId("3")

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (number|string)[] = [1, "2", 3]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "abc"

export {}