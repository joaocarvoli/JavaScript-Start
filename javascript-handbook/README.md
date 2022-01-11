# Javascript Handbook
## The objective of this handbook is to approach basic concepts to be like a review for me and you.
- `Treinamento JavaScript e React` <span>&#x1f1e7;&#x1f1f7;</span>: https://github.com/samirbraga/treinamento-javascript-e-react/tree/master/Aula%201
- `Handbook Oficial Page:` https://www.freecodecamp.org/news/the-complete-javascript-handbook-f26b2c71719c/


____
## Review

> Variable Declaration
```javascript
const name = "John" // The const is a type of variable that cannot be changed by
let nameTwo = "James" // The let is a simple variable that can be initialized after its declaration and also can be changed

console.log(name) // printing something
```

> Data Types
```javascript
let name = "Peter" // String
let age = 25 // Number
let hasEducation = false // Boolean
let props = { employment: true, country: 'Brazil'} // Object
let birthDay = new Date(year = 2002, month = 6, day =29); // New Object Instance
let getProps = () => props // Function 
let secretProp = Symbol("password") // Symbol
let unknowValue = null // Null
let unassignedValue // Undefined
```

> Arrays
```javascript
const arr = [1,2,3,4] // This is an array that contains [1, 2, 3, 4]
const mixedArr = [1, "2", {}, []] // This is an array that contains [1, "2", {}, []]
const emptyArr = Array(10) // This is a empty array
const filledArr = Array(1,2,3,4) // This is an array that contains [1, 2, 3, 4]
```

> Arrays Manipulation
```javascript
let numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach(num => {
    console.log(num)
}) // It will iterates over each element of the array

// You can use a map and to apply a function over the array
let squares = numbers.map(num => num * num)
console.log(squares) // [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]

// You can use a filter and to apply a function over the array
let odd = numbers.filter(num => num % 2 != 0)
console.log(squares) // [ 1, 3, 5, 7, 9 ]
```

> Objects

```javascript
const developer = {
    firstname: "John",
    lastname: "Oak",
    skills: ['javascript', 'node.js', 'react', 'webdesign'],
    getDescription: function() {
        return console.log(`${this.firstname} ${this.lastname}, ${this.age} years old`)
    },
    age: 20
}

console.log(developer) // It will returns all object
console.log(developer.fisrtname)
console.log(developer['skills'])
// These two lines above returns the same thing but accessing in a different way
developer.age = 19 // It creates a new field and set its value or update it
```

> Objects Manipulation

```javascript
let person = {name: "John", age: 19}
console.log(Object.keys(person)) // It returns the object keys
console.log(Object.keys(person)) // It returns the object values
```

> Functions and parameters

