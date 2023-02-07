let h1 = document.createElement('h1')
let root = document.getElementById('root')

h1.innerText='毎日ITを勉強してる'
h1.id = 'heading'
h1.className = 'test class2'
// h1.style = 'color: green; font-size: 20px' 
Object.assign(h1.style, {
    color: 'white',
    backgroundColor: '#333'
})



root.appendChild(h1) //appendChild là thêm thằng con vào

