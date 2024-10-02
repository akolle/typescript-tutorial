// FUNCTIONS PARAMS AND FUNCTION RETURNS

import { array, boolean, string } from 'zod'

function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`)
}

// 3 options;
// -any
// -config
// -type

sayHi('Andy')

// FUNCTION RETURNS

/*
function calculateDiscount(price: number): number {
  const hasDiscount = true

  if(hasDiscount){
    return 'Discount applied'
  }
}

const finalPrice = calculateDiscount(200)

*/

function addThree(number: any) {
  let anotherNumber: number = 3
  return number + anotherNumber
}

const result = addThree(3)
const someValue = result

// someValue.myMethod()

const arrayOfNames: string[] = ['andy', 'emily', 'keith']

function checkForName(name: string): boolean {
  return arrayOfNames.includes(name)
}

// let nameToCheck = 'andyy'
// if (checkForName(nameToCheck)) {
//   console.log(`${nameToCheck} is in the list`)
// } else {
//   console.log(`${nameToCheck} is not in the list`)
// }

// optional param
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0)
}

let priceAfterDiscount = calculatePrice(100, 20)

// optional param part 2
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints
}

let scoreAfterPenalty = calculateScore(100, 20)
let scoreWithoutPenalty = calculateScore(300)

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2)
  console.log(doubled)

  let total = numbers.reduce((previous, current) => {
    return previous + current
  }, 0)
  return `${message}${total}`
}

let result2 = sum('The total is : ', 1, 2, 3, 4, 5)
let result3 = sum('This is the total : ', 1, 2, 3, 4, 5, 6)

// console.log(result2)
// console.log(result3)

// let numbers: number[] = [1, 2, 3, 4, 5]
// console.log(numbers.reduce((number) => number + number))

//Union types as function parameters challenge
function processInput(input: string | number): void {
  if (typeof input === 'number') {
    const inputDoubled = input * 2
    console.log(`${input} has been doubled to: ${inputDoubled}`)
  } else {
    const inputUpper = input.toUpperCase()
    console.log(`'${input}' has been converted to: '${inputUpper}'`)
  }
}

processInput(2)
processInput('hi, my name is andy')

// Objects as parameters
function createEmployee({ id }: { id: number }): {
  id: number
  isActive: boolean
} {
  return { id: 1, isActive: id % 2 === 0 }
}

const first = createEmployee({ id: 1 })
const second = createEmployee({ id: 2 })
console.log(first, second)

// alternative
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`)
}

const newStudent = {
  id: 5,
  name: 'Andy',
}

createStudent(newStudent)

// challenge
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'string' && config.reverse === true) {
    const inputArray = input.split('')
    const reverseInputArray = inputArray.reverse()
    const reverseInput = reverseInputArray.join('')
    return reverseInput
  }
  if (typeof input === 'string') {
    return input.toUpperCase()
  } else {
    return input * input
  }
}

// console.log(processData('hello world', { reverse: true })) // test for string reverse
// console.log(processData('hello world')) // test for string without reverse
// console.log(processData(4, { reverse: false })) // test for number

// Type Alias

type User = { id: number; name: string; isActive: boolean }

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
}
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
}

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`)
  return user
}

type StringOrNumber = string | number

let value: StringOrNumber
value = 'hello'
value = 123

type Theme = 'light' | 'dark'

let theme: Theme
theme = 'dark'
theme = 'light'

function setTheme(t: Theme) {
  theme = t
}

// only have 2 options now when calling the function
setTheme('dark')

// Challenge Type Alias

type Employee = { id: number; name: string; department: string }
type Manager = { id: number; name: string; employees: Employee[] }
type Staff = Employee | Manager
let staff: Staff

function printStaffDetails(staff: Staff): void {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees`
    )
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    )
  }
}

const alice: Employee = { id: 1, name: 'alice', department: 'sales' }
const steve: Employee = { id: 2, name: 'steve', department: 'hr' }
const bob: Manager = { id: 1, name: 'bob', employees: [alice, steve] }

printStaffDetails(alice)
printStaffDetails(bob)

// Intersection Type

type Book = { id: number; name: string; price: number }
type DiscountedBook = Book & { discount: number }

const book1: Book = {
  id: 1,
  name: 'how to train a dragon',
  price: 15,
}

const book2: Book = {
  id: 2,
  name: 'secret life of unicorns',
  price: 18,
}

const discountedBook: DiscountedBook = {
  id: 3,
  name: 'gnomes and goblins',
  price: 25,
  discount: 0.15,
}
