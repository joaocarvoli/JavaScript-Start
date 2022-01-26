const menu = [
    { 
        name: 'pancakes',
        category: 'breakfast'
    },
    { 
        name: 'burger',
        category: 'lunch'
    },
    { 
        name: 'steak',
        category: 'dinner'
    },
    { 
        name: 'bacon',
        category: 'breakfast'
    },
    { 
        name: 'eggs',
        category: 'breakfast'
    },
    { 
        name: 'pasta',
        category: 'dinner'
    }
]

const categories = [...new Set(menu.map((item) => item.category))] // It prints the same result of above code
//const categories = new Set(menu.map((item) => item.category)) // applying the function that shows only the unique values
console.log(categories)
/*
[ 'breakfast', 'lunch', 'dinner' ]
*/

const result2 = document.querySelector('.result')
result2.innerHTML = categories.map((category) => {
    return `<button>${category}</button>`
}).join('-')