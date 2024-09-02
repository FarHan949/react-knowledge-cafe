import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmark] = useState([])

  const handelAddToBookmark = (blog) =>{
       const newBookmarks = [...bookmarks, blog]
       setBookmark(newBookmarks)
  }

  return (
    <>
     
      <Header></Header>

      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handelAddToBookmark={handelAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks> 
      </div>
    </>
  )
}

export default App
