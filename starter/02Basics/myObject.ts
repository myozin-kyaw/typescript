// Js Object
const User = {
    name: "Myo Zin Kyaw",
    email: "myozinkyaw103@gmail.com",
    isActive: true
}

// Ts Object
function createUser({name: sting, isPaid: boolean}) {}

let newUser = {name: "myo", isPaid: true, email: "m@m.com"}
createUser(newUser  )

function createCourse(): {name: string, price:number} {
    return {name: "myo", price: 123}
}

// Ts Object
type User = {
    readonly _id: string,
    name: string,
    email: string;
    isActive: boolean,
    createdDetails?: number
}

let myUser: User = {
    _id: "1",
    name: "m",
    email: "m@m.com",
    isActive: true
}

type CardNumber = {
    cardNumber: number
}

type CardDate = {
    cardDate: string
}

type cardDetails = CardNumber & CardDate & {
    cvv: number
}





export {}