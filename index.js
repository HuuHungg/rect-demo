
function Header() {
    return (
        <div className="header"> New-header </div>
    )
}


function Body() {
    return (
        <div className='content'> New-content </div>
    )
}


class Footer extends React.Component {
    render() {
        return (
              <div className="footer"> New-Footer </div>
        )
    }
}


let app = (

    <div className = 'wrapper'>
        <Header />
        <Body />
        <Footer />
    </div>
)


let root = document.getElementById('root')
let contain = ReactDOM.createRoot(root)
contain.render(app)



//


function PostItem() {
    return (
        <div className="post-item">
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZHQzq3399wXUYfIKZYK7l-ROfVVdDPZgwog&usqp=CAU" alt="今朝学校を休み" />
                <h2 className="post-title">今朝学校を休みました</h2>
                <p className="post-desc">日本語が難しいですが頑張りましょう</p>
                <p className="post-public">明日家へ帰るつもりです</p>                
         </div>
    )
}



let app2 = (
    <div className="post-list">
        <PostItem />
        

    </div>
)


let root2 = document.getElementById('root2')
let contain2 = ReactDOM.createRoot(root2)
contain2.render(app2)

// Chua bai cach 2


function PostItem2({
    image, 
    title, 
    description,
    publishedAt
}) {
    return (
        <div className="post-item2">
                <img  
                    src={image}
                    alt={title}
                />

                <h2 className="post-title">{title}</h2>
                <p className="post-desc">{description}</p>
                <p className="post-public">{publishedAt}</p>                
        </div>

    )
}



function App() {
    return(
        <div id="wrapper">
            <PostItem2 
                title= "今朝学校を休みました"
                description= "明日家へ帰るつもりです"
                publishedAt = "日本語が難しいですが頑張りましょう"
                image= "https://vnreview.vn/image/16/81/51/1681516.jpg?t=1499848476274"
            />


        </div>

    )
}


let root3 = document.getElementById('root3')

let contain3 = ReactDOM.createRoot(root3)
contain3.render(<App/>)



let courses = [
    {
        
        "description": "Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.",
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png",
        "video_url": "",
        "landing_page_url": "/landing/htmlcss",
        "is_pre_order": false,
        "is_published": true
      },
      {
        
        "description": "Khóa học JavaScript Pro",
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb685c81.png",
        "video_url": "",
        "landing_page_url": "/landing/javascript-pro",
        "is_pre_order": false,
        "is_published": true
      },
      {
        "description": "Khóa học ReactJS Pro",
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/20/62f13dded314e.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/20/62f13ddf5e7f9.png",
        "video_url": "",
        "landing_page_url": "/landing/reactjs-pro",
        "is_pre_order": false,
        "is_published": false
      }
]



function PostItem3({
    image,
    title,
    description

}) {
    return (
        <div className="post-item3">
            <img 
                src={image}
                alt={title}
            />
            <p className="props-des">{description}</p>
            <p className="props-title">{title}</p>

        </div>

    )
}



function Course() {
    return (
        <div id="wrapper2">
            <PostItem3 
                image = "https://files.fullstack.edu.vn/f8-prod/courses/20/62f13dded314e.png"
                description = "Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi."
                title = "毎日日本語を勉強してる頑張りましょう"
         />
            <PostItem3 
                image = "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png"
                description = "Khóa học JavaScript Pro"
                title = "ITの専門が難しいですが頑張ってください"
            />
            <PostItem3 
                image = "https://files.fullstack.edu.vn/f8-prod/courses/20/62f13dded314e.png"    
                description = "Khóa học ReactJS Pro"
                title = "毎日２時間ぐらいITを勉強するつもりです"
            />

        </div>

    )
}


let root4 = document.getElementById('root4')
let contain4 = ReactDOM.createRoot(root4)
contain4.render(<Course />)