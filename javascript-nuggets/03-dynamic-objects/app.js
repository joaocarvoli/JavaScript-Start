const items = {
    'feature-items':['item-1', 'item-2']
}

console.log(items['feature-items']) // [ 'item-1', 'item-2' ]

let appState = 'loading'
// appState = 'error' // This change appState value and console.log in 13 line will be // { error: true } 

const app = {
    [appState]:true
}

const keyName = 'computer'
app[keyName] = 'apple' // Changing the value dynamically

console.log(app) // { loading: true, computer: 'apple' }

const state = {
    loading: true, 
    name:'',
    job:''
}

// This function update the object (dictionary) value
function updateState(key,value){
    state[key] = value
}

updateState('name', 'john')
console.log(state) // { loading: true, name: 'john', job: '' }

updateState('job','developer')
updateState('loading', false)
console.log(state) // { loading: false, name: 'john', job: 'developer' }

updateState('products', [])
console.log(state) // { loading: false, name: 'john', job: 'developer', products: [] }