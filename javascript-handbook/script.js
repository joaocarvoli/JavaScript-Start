let fetch = require("node-fetch");

// One way
/*async function getData(){
    const result = await fetch('https://api.github.com/users/joaocarvoli')
    const resultJSON = await(result.json())
    console.log('The user names is '+ resultJSON.name + "and its company is " + resultJSON.company)
}*/
// Another way to do the same thing

async function getData(){
    const result = await fetch('https://api.github.com/users/joaocarvoli').then((res) => res.json())
    console.log('The user names is '+ result.name + "and its company is " + result.company)
}

getData()