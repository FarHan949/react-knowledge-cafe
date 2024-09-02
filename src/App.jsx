import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmark] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handelAddToBookmark = (blog) =>{
       const newBookmarks = [...bookmarks, blog]
       setBookmark(newBookmarks)
  }
  
  const handelToAddReadingTime = (time) =>{
     setReadingTime(readingTime + time)
     console.log(time)
  }


  return (
    <>
     
      <Header></Header>

      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handelAddToBookmark={handelAddToBookmark}
        handelToAddReadingTime={handelToAddReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks> 
      </div>
    </>
  )
}

export default App
