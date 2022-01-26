const people = [
    { name: 'bob',
      age: 20,
      position: 'developer'
    },
    { name: 'anna',
      age: 25,
      position: 'desginer'
    },
    { name: 'busy',
      age: 30,
      position: 'boss'
    },
    { name: 'john',
      age: 30,
      position: 'intern'
    },

]

const getAges = (person) => person.age
const ages = people.map(getAges)
console.log(people)
/* 
[ { name: 'bob', age: 20, position: 'developer' },
  { name: 'anna', age: 25, position: 'desginer' },
  { name: 'busy', age: 30, position: 'boss' },
  { name: 'john', age: 30, position: 'intern' } ]
*/
console.log(ages) // [ 20, 25, 30, 30 ]

const newPeople = people.map((item) => {
  return {
    firstName: item.name.charAt(0).toUpperCase() + item.name.slice(1),
    oldAge: item.age + 10
  }
})
console.log(newPeople)
/*
[ { firstName: 'Bob', oldAge: 30 },
  { firstName: 'Anna', oldAge: 35 },
  { firstName: 'Busy', oldAge: 40 },
  { firstName: 'John', oldAge: 40 } ]
*/

const names = people.map((person) => `<h2>${person.name}</h2>`)
const result = document.querySelector('#result')

result.innerHTML = names.join('')