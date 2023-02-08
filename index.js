
function App() {
    return (
        <div id="wrapper">
            <button 
              onDoubleClick={()=> 
                console.log(Math.random())
            }

        >
            Click me!
        
        </button>
        </div>
    )
}

let root = document.getElementById('root')
let contain = ReactDOM.createRoot(root)
contain.render(<App/>)

