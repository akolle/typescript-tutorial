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

let array: (string | boolean)[] = ['apple', true, 'orange', false]

let temperatures: number[] = [20, 25, 30]
// templates.push('hello')

let colors: string[] = ['red', 'green', 'blue']
// colors.push(true)

let mixedArray: (number | string)[] = [1, 2, 'three']

// OBJECTS
let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 }
car.brand = 'ford'
// car.brand = 2024

let car1: { brand: string; year: number } = { brand: 'audi', year: 2023 }

let book = { title: 'book', cost: 20 }
let pen = { title: 'pen', cost: 10 }
let notebook = { title: 'notebook' }

// optional type in objects
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook]
// items[0].title = 'new book'
items[0].cost = 12
console.log(items[2])

// OBJECTS CHALLENGE
let bike: { brand: string; year: number } = { brand: 'yamaha', year: 2010 }
let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 }

let product1 = { title: 'shirt', price: 20 }
let product2 = { title: 'pants' }

let products: { title: string; price?: number }[] = [product1, product2]

// if you do choose to have the optional price - it must follow correct type or it will error
// products.push({ title: 'shoes', price: 'expensive' })
