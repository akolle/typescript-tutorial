// FUNCTIONS PARAMS AND FUNCTION RETURNS

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
