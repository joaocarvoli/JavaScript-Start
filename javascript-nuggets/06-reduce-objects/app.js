// Reduce - Objects
const cart = [
    {
        title: 'Samsung Galaxy S7',
        price: 599.99,
        amount: 1
    },
    {
        title: 'Google Pixel',
        price: 499.99,
        amount: 2 
    },
    {
        title: 'Xiaomi Redmi Note 2',
        price: 699.99,
        amount: 4
    },
    {
        title: 'Xiaomi Redmi Note 5',
        price: 399.99,
        amount: 3
    }
]

let {totalItems, cartTotal} = cart.reduce((total, cartItem) => {
    const {amount, price} = cartItem
    total.totalItems += amount // Count items
    total.cartTotal += amount*price // Count sum
    
    return total
}, {
    totalItems:0,
    cartTotal: 0
})

cartTotal = cartTotal.toFixed(2) // limit numbers after "." or ","
console.log(totalItems) // 10
console.log(cartTotal) // 5599.90


const url = 'https://api.github.com/users/joaocarvoli/repos?per_page=100' // github profile
const fetchRepos = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const newData = data.reduce((total, repo) => {
        const { language } = repo
        //if (laguage){
        //    if (total[laguage]){
        //        total[laguage] = total[laguage] + 1
        //    } else {
        //        total[laguage] = total[laguage]
        //    }
        //}
        if(language){
            //console.log("total:",total[language])
            //console.log("language:",language)
            total[language] = total[language] + 1 || 1
        }
        return total
    }, {})
    console.log(newData)
}
fetchRepos()
///*
//{
//    "Python": 2,
//    "Jupyter Notebook": 4,
//    "C": 1,
//    "JavaScript": 2,
//    "CSS": 1,
//    "C++": 1
//}
//[[Prototype]]: Object
//*/
//