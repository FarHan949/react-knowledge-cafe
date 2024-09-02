import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmark, setBookmark] = useState([])

  const handelAddToBookmark = (blog) =>{
       console.log(blog)
  }

  return (
    <>
     
      <Header></Header>

      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handelAddToBookmark={handelAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks> 
      </div>
    </>
  )
}

export default App
