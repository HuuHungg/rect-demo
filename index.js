
// Bai 1
// let From = {
//     Input() {
//         return <input />
//     },
//     Checkbox() {
//         return <input type="checkbox"/>
//     }
// }

// function App() {
//     let type = 'Checkbox'
//     let Component = From[type]
    
    
//     return (
//         <div id="wrapper">
//             <Component />
//         </div>

//     )

// }

// --------------------------------------------

// Bai 2

// function Button({title, href, onClick}) {
//     let Component = 'button'
//     let props = {}

//     if(href) {
//         Component = 'a'
//         props.href = href
//     }

//     if (onClick) {
//         props.onClick = onClick
//     }
    
//     return(
//         <Component {...props}>{title}</Component>
        
//     )
// }



// function App() {
//     return (
//         <div id="wrapper">
//             <Button 
//                 title = "Click me!"
//                 href = "http://fullstack.edu.vn/"
//                 onClick = {() => console.log(Math.random())}
//             />

//         </div>
//     )
// }

// ----------------------------------

// Bai 3

function App() {

    let firstAccess = true

    return (
        <div id="wrapper">
            {firstAccess && <h1>Welcome to F8</h1>}
        </div>

    )
}

let root = document.getElementById('root')
let contain = ReactDOM.createRoot(root)
contain.render(<App title="Welcome back!"/>)