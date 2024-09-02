import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handelAddToBookmark}) => {

    const [blogs, setBlogs] = useState([])

useEffect(()=>{
    fetch('blogs.json')
    .then( res => res.json())
    .then( data => setBlogs(data))
},[])

    return (
        <div className='md:w-4/5'>
            <div className="text-4xl">Blogs</div>
            {
                blogs.map(blog => <Blog key={blog.id}
                blog={blog} handelAddToBookmark={handelAddToBookmark}></Blog>)
            }
        </div>
    );
};

export default Blogs;