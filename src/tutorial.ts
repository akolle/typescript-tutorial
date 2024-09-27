// union type
let tax: number | string = 10

tax = 'andy'
tax = 10
tax = 10.5

// literal types
let requestStatus: 'pending' | 'success' | 'error' = 'pending'
requestStatus = 'pending'
requestStatus = 'error'
// requestStatus = 'random'

// any should we use this? ehhh
let notSure: any = 4
notSure = [1, 3, 5, 'string', 4.5]

// inferred to any but be careful
let random

const books = ['1984', 'Brave New World', 'Fahrenheit 451']

let foundBook: string | undefined

for (let book of books) {
  if (book === '1984') {
    foundBook = book
    break
  }
}

// this is a problem because now we can set it to 10 which can cause issues downstream
foundBook?.length

// console.log(foundBook)

// UNION TYPE CHALLENGE
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'
let discount: number | string = 20

discount = '20%'

// Typescript Arrays
let prices: number[] = [100, 75, 24]
prices.push(25)

let fruit: string[] = ['apple', 'orange']

// Be careful with this one
// let randomValues: [] = [1, 2, 4]
