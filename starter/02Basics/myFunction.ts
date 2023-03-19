function addTwoNumber(num: number): number {
    return num + 2
}

function getUpper(val: string): string {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwoNumber(5)
getUpper("myozinkyaw")
signUpUser("myozinkyaw", "myozinkyaw103@gmail.com", true)
loginUser("myozinkyaw", "m@m.com")

function getValue(myVal: number): string|boolean {
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

// heros.map((hero: string) => {
//     return `Hero is ${hero}`
// })

heros.map((hero): string => {
    return `Hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);   
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}


export {}