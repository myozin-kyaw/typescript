interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const myozin: Admin = {
    dbId: 11, 
    role: "admin",
    githubToken: "abcdefg",
    email: "m@m.com", 
    userId: 2,
    startTrail: () => {return 'trail started'},
    getCoupon: (name: "abc", off: 12) => {return 10}
}
myozin.email = "m@z.com"
// myozin.dbId = 22

export {}