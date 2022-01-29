// Reduce - iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2st parameter ('curr') - current iteration/value

const staff = [
    { name: 'bob',age: 20,position: 'developer', salary: 100},
    { name: 'anna',age: 25,position: 'designer', salary: 300},
    { name: 'busy',age: 30,position: 'boss', salary: 400},
    { name: 'john',age: 30,position: 'intern', salary: 10},
]

const dailyTotal = staff.reduce((total, person)=>{
    console.log("person:",person.salary,"total:", total)
    total += person.salary
    return total
}, 0)
/*
person: 100 total: 0
person: 300 total: 100
person: 400 total: 400
person: 10 total: 800
*/

console.log(dailyTotal) // 810
