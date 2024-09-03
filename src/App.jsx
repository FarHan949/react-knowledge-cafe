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
  
  const handelToAddReadingTime = (id, time) =>{
     setReadingTime(readingTime + time)

    //  remove item 
    const remainingBookMark =  bookmarks.filter( bookmark => bookmark.id !== id)
    setBookmark(remainingBookMark)
  }


  return (
    <>
     
      <Header></Header>

      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handelAddToBookmark={handelAddToBookmark}
        handelToAddReadingTime={handelToAddReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks> 
      </div>
    </>
  )
}

export default App
