const people = [
    { name: 'bob',age: 20,position: 'developer'},
    { name: 'anna',age: 25,position: 'designer'},
    { name: 'busy',age: 30,position: 'boss'},
    { name: 'john',age: 30,position: 'intern'},
]

// FILTER - returns a array
const youngPeople = people.filter((person) => {
    //if(person.age < 35){
    //    return person
    //}
    return person.age < 30
})

console.log(youngPeople)
/*
[ { name: 'bob', age: 20, position: 'developer' },
  { name: 'anna', age: 25, position: 'desginer' } ]
*/

const developers = people.filter((person) => person.position == 'developer')
console.log(developers) // [ { name: 'bob', age: 20, position: 'developer' } ]

const seniorDevs = people.filter((person) => person.position == 'senior dev')
console.log(seniorDevs) // []

// FIND - returns only an object

const anna = people.find((person) => person.name == 'anna')
console.log(anna) // { name: 'anna', age: 25, position: 'designer' }

const peter = people.find((person) => person.name == 'peter')
console.log(peter) // undefined

const random = people.find((person) => person.age < 35 && person.age > 25)
console.log(random) // { name: 'busy', age: 30, position: 'boss' }