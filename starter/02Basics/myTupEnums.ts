// const user: (string|number)[] = ["ab", 1]

let user: [string, number, boolean]

user = ["ab", 111, true]
// user = [true, "ab", "12"]

let rgb: [number, number ,number] = [255, 113, 115]

type NewUser = [number, string]

const newUser: NewUser = [112, "newUser@gmail.com"]

newUser[1] = "myo@myo.com"
// newUser[0] = "number"
// newUser.push(true)


export {}