// function Button({title}) {
//     return <button>{title}</button>
// }

// function App() {
//     let root2 = "Click change file"
//     return (
//         <div id="wrapper">
//             <Button title= {root2} />
//             {/* <Button title= "Click me!" /> // Cach2 */} 
//         </div>
//     )
// }


// function Button({children}) {
//     return <button>{children}</button>
// }

// function App() {
//     return (
//         <div id="wrapper">
//             <Button>{"ボタンを直した"}</Button>
//         </div>

//     )
// }


function Input({label, ...inputProps}) {
    return (
        <div>
            <label>{label}</label>
            <input {...inputProps} />
        </div>
    )
}

function App() {
    return (
        <div id="wrapper">
            <Input 
                label="Full Name Course"
                type = "text"
                placeholder = "Enter Name..."
                input="Day la Input"
                onFocus = {
                    () => {
                        console.log(Math.random())
                    }
                }
            />

        </div>

    )
}


let root = document.getElementById('root')
let contain = ReactDOM.createRoot(root)
contain.render(<App/>)



function List({data,children}) {
    return (
        <ul>
            {data.map((...props) => children(...props))}
        </ul>
    )
}


function App2() {
    let cars = ['日本語','英語','ベトナム語']
    return(
        <div id="wrapper">  
            <List data={cars}>
                {(item,index) => <li key={index}>{item}</li>}
            </List>
        </div>
    )
}


let root3 = document.getElementById('root2')
let contain2 = ReactDOM.createRoot(root3)
contain2.render(<App2 />)