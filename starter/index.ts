// // type cast string
// const greeting: string = 'Hello World'

// // type cast number
// const year: number = 2023

// const b: string = greeting + 1

// greeting.toLowerCase()

// const addTwoNumbers = (a: number, b: number): number => a + b

// function addTwoNumberOld(a:number, b: number): number {
//     return a + b
// }

// // declare object interface
// interface User {
//     id: string;
//     name: string;
//     age: number;
//     email: string;
// }

// // Case 1 : type cast by object
// const getUserByIdCase1 = (id: string): {id: string, name: string} => ({
//     id,
//     name: 'Myo Zin Kyaw'
// })

// // Case 2 : type cast by object instance
// const getUserByIdCase2 = (id: string): User => ({
//     id,
//     name: 'Myo Zin Kyaw',
//     age: 20,
//     email: 'myozinkyaw103@gmail.com'
// })

// const user = getUserByIdCase1('uuid-1')

// user.id
// user.name

// const saveUserCase1 = (user: {id: string, name: string}) => console.log('saving user', {user})
// const saveUserCase2 = (user: User) => console.log('saving user', {user})

// // declare book instance
// interface Book {
//     id: string;
//     name: string;
//     releaseData?: Date
// }

// const getBookById = (id: string): Book => ({
//     id,
//     name: 'Typescript',
//     releaseData: new Date()
// })

// const book = getBookById('uuid-2')

// const saveBook = (book: Book) => console.log('Book: ', {
//     prop1: book.id,
//     prop2: book.name,
//     prop3: book.releaseData?.toISOString()
// }) 

// saveBook(user)
// saveUserCase1(book)

// // declare array string instance
// const teamArray: string[] = [
//     'Team A',
//     'Team B',
//     'Team C'
// ]

// // declare array number instance
// const numbers: number[] = [1,2,3]
// const listOfNumbers: Array<number> = [1,2,3]

// // declare string or number array instance
// const stringOrNumbers: (number|string)[] = [
//     1,
//    'one',
// ]

// // compare type cast order err
// const orderArray: [string, number] = ['Hello World', 2023];
// // const noneOrderArray: [string, number] = [2023, 'Hello World'];

// enum Coin {
//     HEAD = 'Head',
//     TAIL = 'Tail'
// }

// // Literal Type
// const filpCoin = (): 'Head'|'Tail' => Math.random() < 0.5 ? 'Head' : 'Tail'
// const filpCoinWithEnum = (): Coin.HEAD|Coin.TAIL => Math.random() < 0.5 ? Coin.HEAD : Coin.TAIL 

// enum Suit {
//     HEARTS = 0,
//     SPADES = 1,
//     DIAMONDS = 3,
//     CLUBS = 4
// }

// const suitMeaning = (suit: Suit) => {
//     if (Suit.HEARTS === suit) return 'This is hearts'
//     if (Suit.SPADES === suit) return 'This is spades'
//     if (Suit.DIAMONDS === suit) return 'This is diamonds'
//     if (Suit.CLUBS === suit) return 'This is club'
// }