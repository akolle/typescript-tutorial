class Book {
  title: string
  author: string
  private checkedOut: boolean

  constructor(title: string, author: string) {
    this.title = title
    this.author = author
    this.checkedOut = false
  }

  checkOut() {
    this.checkedOut = true
  }
}

const deepWork = new Book('deep work', 'cal james')
deepWork.title = 'baby cakes'
console.log(deepWork)
deepWork.checkOut()
console.log(deepWork)

/*

import { z } from 'zod'

// import newStudent, { sayHello, person, type Student } from './actions'
// import {someValue} from './example.js' should be using .ts files

// FETCHING DATA WITH TYPESCRIPT
const url = 'https://www.course-api.com/react-tours-project'

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  something: z.number(),
})

type Tour = z.infer<typeof tourSchema>

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const rawData: Tour[] = await response.json()
    const result = tourSchema.array().safeParse(rawData)
    console.log(result)
    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`)
    }
    return result.data
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'there was an error...'
    console.log(errorMsg)
    return []
  }
}

const tours = await fetchData(url)
tours.map((tour) => {
  console.log(tour.name)
})

// GENERICS

// let array1: string[] = ['Apple', 'Banana', 'Mango']
// let array2: number[] = [1, 2, 3]
// let array3: boolean[] = [true, false, true]

// let array1: Array<string> = ['Apple', 'Banana', 'Mango']
// let array2: Array<number> = [1, 2, 3]

// Too many types to set up so we use Generics
// function createString(arg: string): string {
//   return arg
// }
// function createNumber(arg: number): number {
//   return arg
// }

function genericFunction<T>(arg: T): T {
  return arg
}

const someStringValue = genericFunction<string>('hello world')
const someNumberValue = genericFunction<number>(123)

interface GenericInterface<T> {
  value: T
  getValue: () => T
}

const genericString: GenericInterface<string> = {
  value: 'Hello World',
  getValue() {
    return this.value
  },
}

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2]
}

let result = pair(123, 'hello')

console.log(result)

// TYPE PREDICATE

// type Student = {
//   name: string
//   study: () => void
// }

// type User = {
//   name: string
//   login: () => void
// }

// type Person = Student | User

// const randomPerson = (): Person => {
//   return Math.random() > 0.5
//     ? { name: 'john', study: () => console.log('Studying') }
//     : { name: 'mary', login: () => console.log('Logging in') }
// }

// const person = randomPerson()

// function isStudent(person:Person){
//   return 'study' in person
// }

// TYPE GUARDING

// function checkInput(input: Date | string): string {
//   if (input instanceof Date) {
//     return input.getFullYear().toString()
//   } else {
//     return input
//   }
// }

// const year = checkInput(new Date())
// const random = checkInput('2020-05-05')

// console.log(year)
// console.log(random)

// function printLength(str: string | null | undefined) {
//   if (str) {
//     console.log(str.length)
//   } else {
//     console.log('no string provided')
//   }
// }

// printLength('hello')
// printLength('')
// printLength(null)
// printLength(undefined)

// type Dog = { type: 'dog'; name: string; bark: () => void }
// type Cat = { type: 'cat'; name: string; meow: () => void }
// type Animal = Dog | Cat

// function makeSound(animal: Animal) {
//   if(animal.type === 'dog'){
//     animal.bark()
//   } else {
//     animal.meow();
//   }
// }

// function makeSound(animal: Animal) {
//   if ('bark' in animal) {
//     animal.bark()
//   } else {
//     animal.meow()
//   }
// }

// type ValueType = string | number | boolean

// let value: ValueType
// const random = Math.random()
// value = random < 0.33 ? 'hello' : random < 0.66 ? 123.456 : true

// function checkValue(value: ValueType): void {
//   if (typeof value === 'string') {
//     console.log(value.toLowerCase())
//     return
//   }
//   if (typeof value === 'number') {
//     console.log(value.toFixed(2))
//     return
//   }
//   console.log(`boolean: ${value}`)
// }

// checkValue(value)

// sayHello('Typescript')
// console.log(newStudent)
// console.log(person)

// const anotherStudent: Student = {
//   name: 'bob',
//   age: 23,
// }

// console.log(anotherStudent)

/*

// FUNCTIONS PARAMS AND FUNCTION RETURNS

import { array, boolean, string } from 'zod'

// function sayHi(name: string) {
// console.log(`Hello there ${name.toUpperCase()}`)
// }

// 3 options;
// -any
// -config
// -type

// sayHi('Andy')

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

/*

function addThree(number: any) {
  let anotherNumber: number = 3
  return number + anotherNumber
}

const result = addThree(3)
// const someValue = result

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
  // console.log(doubled)

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
// console.log(first, second)

// alternative
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`)
}

const newStudent = {
  id: 5,
  name: 'Andy',
}

// createStudent(newStudent)

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

// type User = { id: number; name: string; isActive: boolean }

// const john: User = {
//   id: 1,
//   name: 'john',
//   isActive: true,
// }
// const susan: User = {
//   id: 1,
//   name: 'susan',
//   isActive: false,
// }

// function createUser(user: User): User {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`)
//   return user
// }

// type StringOrNumber = string | number

// let value: StringOrNumber
// value = 'hello'
// value = 123

// type Theme = 'light' | 'dark'

// let theme: Theme
// theme = 'dark'
// theme = 'light'

// function setTheme(t: Theme) {
//   theme = t
// }

// // only have 2 options now when calling the function
// setTheme('dark')

// Challenge Type Alias

// type Employee = { id: number; name: string; department: string }
// type Manager = { id: number; name: string; employees: Employee[] }
// type Staff = Employee | Manager
// let staff: Staff

// function printStaffDetails(staff: Staff): void {
//   if ('employees' in staff) {
//     console.log(
//       `${staff.name} is a manager of ${staff.employees.length} employees`
//     )
//   } else {
//     console.log(
//       `${staff.name} is an employee in the ${staff.department} department`
//     )
//   }
// }

// const alice: Employee = { id: 1, name: 'alice', department: 'sales' }
// const steve: Employee = { id: 2, name: 'steve', department: 'hr' }
// const bob: Manager = { id: 1, name: 'bob', employees: [alice, steve] }

// printStaffDetails(alice)
// printStaffDetails(bob)

// Intersection Type

/*
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
*/
/*
// Interface Fundamentals

interface Book {
  readonly isbn: number
  title: string
  author: string
  genre?: string
  // method
  printAuthor(): void
  printTitle(message: string): string
  printSomething: (someValue: number) => number
}

const deepWork: Book = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  genre: 'self-help',
  printAuthor() {
    console.log(this.author)
  },
  printTitle(message) {
    return `${this.title} ${message}`
  },
  // first option
  // printSomething: function (someValue) {
  //   return someValue
  // },
  // second option
  // printSomething:(someValue)=>{return someValue}
  // third option
  printSomething(someValue) {
    return someValue
  },
}

// console.log(deepWork.printSomething(34))

interface Computer {
  readonly id: number
  brand: string
  ram: number
  storage?: number
  // methods
  upgradeRam(amount: number): void
  printRam(): void
}

const newComputer: Computer = {
  id: 123,
  brand: 'dell',
  ram: 16,
  upgradeRam(amount: number): void {
    this.ram += amount
    console.log(`Computers ram has been updated to ${this.ram}`)
  },
  printRam() {
    console.log(`Computer with id: ${this.id} has ${this.ram} amount of ram`)
  },
}

// newComputer.printRam()
// newComputer.upgradeRam(4)
// newComputer.printRam()

// console.log(newComputer)

// Interface Advanced

// interface Person {
//   name: string
//   getDetails(): string
// }

// interface DogOwner {
//   dogName: string
//   getDogDetails(): string
// }

// Merge Interfaces

// interface Person {
//   age: number
// }

// const person: Person = {
//   name: 'john',
//   age: 30,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`
//   },
// }

// interface Employee extends Person {
//   employeeId: number
// }

// const employee = {
//   name: 'jane',
//   age: 23,
//   employeeId: 123,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`
//   },
// }

// console.log(employee.getDetails())

// interface Manager extends Person, DogOwner {
//   managePeople(): void
// }

// const manager: Manager = {
//   name: 'bob',
//   age: 42,
//   dogName: 'rex',
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`
//   },
//   getDogDetails() {
//     return `Name: ${this.dogName}`
//   },
//   managePeople() {
//     console.log('Managing people...')
//   },
// }

// manager.managePeople()

// Challenge Part 1 ----------------------------------------------------------

interface Person {
  name: string
}

interface DogOwner extends Person {
  dogName: string
}

interface Manager extends Person {
  managePeople(): void
  delegateTasks(): void
}

function getEmployee(): Person | DogOwner | Manager {
  const randNum: number = Math.random()

  if (randNum < 0.33) {
    console.log(`you are in the person instance and randNum is ${randNum}`)
    const person: Person = {
      name: 'andy',
    }
    return person
  }
  if (randNum < 0.66) {
    console.log(`you are in the dogowner instance and randNum is ${randNum}`)
    const dogOwner: DogOwner = {
      name: 'emily',
      dogName: 'rex',
    }
    return dogOwner
  } else {
    console.log(`you are in the manager instance and randNum is ${randNum}`)
    const manager: Manager = {
      name: 'keith',
      managePeople() {
        console.log('Managing people...')
      },
      delegateTasks() {
        console.log('Delegating tasks...')
      },
    }
    return manager
  }
}

let employee: Person | DogOwner | Manager = getEmployee()

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return 'managePeople' in obj
}

if (isManager(employee)) {
  employee.delegateTasks()
}

// --------------------------------------------------------------------------

// Tuples and Enums ----------------------------------------------------------

let person: [string, number] = ['john', 25]

function getPerson(): [string, number] {
  return ['john', 25]
}

let randomPerson = getPerson()
// console.log(randomPerson[0])
// console.log(randomPerson[1])

let clair: [string, number?] = ['clair']

// Enums

enum ServerReponseStatus {
  Success = 200,
  Error = 500,
}

Object.values(ServerReponseStatus).forEach((value) => {
  if (typeof value === 'number') {
    console.log(value)
  }
})

// console.log(ServerReponseStatus)

interface ServerResponse {
  result: ServerReponseStatus
  data: string[]
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerReponseStatus.Success,
    data: ['first', 'last'],
  }
}

const response: ServerResponse = getServerResponse()
// console.log(response)

// Challenge

// enum UserRole {
//   Admin,
//   Manager,
//   Employee,
// }

// type User = {
//   id: number
//   name: string
//   role: UserRole
//   contact: [string, string]
// }

// function createUser(user: User): User {
//   return user
// }

// const user: User = createUser({
//   id: 1,
//   name: 'john d',
//   role: UserRole.Admin,
//   contact: ['john@adhfk.com', '123-234-5432'],
// })

// console.log(user)

// ---------------------------------------------------------------------------

// Type Assertion, Type Unknown and Type Never -------------------------------

let someValue: any = 'this is a string'

let strLength: number = (someValue as string).length

type Bird = {
  name: string
}

let birdString = '{"name": "Eagle"}'
let dogString = '{"breed": "Poodle"}'

let birdObject = JSON.parse(birdString)
let dogObject = JSON.parse(dogString)

let bird = birdObject as Bird
let dog = dogObject as Bird

console.log(bird.name)
console.log(dog.name)

enum Status {
  Pending = 'pending',
  Declined = 'declined',
}

type User = {
  name: string
  status: Status
}

// save Status.Pending in the DB as a string
// retrieve string from the DB

const statusValue = 'pending'

const user: User = { name: 'john', status: statusValue as Status } // type assertion is a way to tell typescript that we know the type and it's ok

// Type Unknown

let unknownValue: unknown
unknownValue = 'hello world'
unknownValue = [1, 2, 3]
unknownValue = 42.67896

if (typeof unknownValue === 'number') {
  unknownValue.toFixed(2)
}

function runSomeCode() {
  const random = Math.random()
  if (random < 0.5) {
    throw new Error('there was an error...')
  } else {
    throw 'some error'
  }
}

try {
  runSomeCode()
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message)
  } else {
    console.log(error)
  }
}

// Type Never

// let someValue: never = 'hello' cannot assign any value to type never

type Theme = 'light' | 'dark'

function checkTheme(theme: Theme): void {
  if (theme === 'light') {
    console.log('light theme')
    return
  }
  if (theme === 'dark') {
    console.log('dark theme')
    return
  }
  theme
}

enum Color {
  Red,
  Blue,
  Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return 'Red'
    case Color.Blue:
      return 'Blue'
    case Color.Green:
      return 'Green'
    default:
      // at build time
      let unexpectedColor: never = color
      // at runtime
      throw new Error(`unexpected color value : ${color}`)
  }
}

console.log(getColorName(Color.Red))
console.log(getColorName(Color.Blue))
console.log(getColorName(Color.Green))

const susan = 'susan'

// ---------------------------------------------------------------------------

*/
