// REACT.CREAREELEMENT () => React element

// React element là thành phần nhỏ nhất của React


// DOM
let h1Dom = document.createElement('h1')

h1Dom.title = 'Hello'
h1Dom.className = 'Heading'
h1Dom.innerText = '毎日ITを勉強してるでもむずかしいです'

document.body.appendChild(h1Dom)

// React
let h1React = React.createElement('h1', {
    title: 'Hello',
    className: 'React heading'
}, 'ITが難しいですので毎日頑張って勉強しているところです' ) 

console.log(h1Dom)
console.dir(h1React)



// VD: 2
//  <ul>
//     <li>ReactJs</li>
//     <li>Javascript</li>
//  </ul>

// DOM

let ulDom = document.createElement('ul')
ulDom.style = 'color: red'
ulDom.id = 'react'

let liDOM1 = document.createElement('li')
liDOM1.innerText = 'ReactJS'
liDOM1.className = 'find'

let liDOM2 = document.createElement('li')
liDOM2.innerText = 'Javascript'

ulDom.appendChild(liDOM1)
ulDom.appendChild(liDOM2)

document.body.appendChild(ulDom)


// Reeact

let ulReact = React.createElement(
    'ul',
    {
        id: 'React',
        className: 'Fine'
    },
    React.createElement('li',{className:'find'}, 'ITがむず歌詞いいです'),
    React.createElement('li', null, '日本語が難しいです')
)

    let root2 = document.getElementById('root2')
    ReactDOM.render(ulReact, root2)


// VD3.
    // <div class="post-item">
    //     <h2> title="Hoc React tai f8">Hoc React</h2>
    //     <p>Hoc reacjs tu co ban den nang cao</p>
    // </div> 


// DOM 
    
    let divDom = document.createElement('div')
    divDom.className = "post-item"
    let h2Dom = document.createElement('h2')
    h2Dom.innerText = '日本語が難しいですが頑張ってください'
    h2Dom.title = 'Hoc ReactJs tai f8'

    let pDom = document.createElement('p')
    pDom.innerText = '毎日専門２時間ぐらい勉強しているところです'

    divDom.appendChild(h2Dom)
    divDom.appendChild(pDom)

    document.body.appendChild(divDom)

// React

    let divDom2 = React.createElement(
        'div',
        {
            className: 'post-item'
        },
        React.createElement('h2', {title: 'Hoc react tai F8'}, 'Study ReactJS'),
        React.createElement('p', {}, 'Learn ReactJS from Zero to Herro' )
    )

    // Get root element 
    let root = document.getElementById('root')
    
    // React-DOM -> render UI
    ReactDOM.render(divDom2,root)

