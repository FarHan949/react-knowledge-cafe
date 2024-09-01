import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

useEffect(()=>{
    fetch('blogs.json')
    .then( res => res.json())
    .then( data => setBlogs(data))
},[])

    return (
        <div className='md:w-2/3'>
            <div className="text-4xl">Blogs</div>
        </div>
    );
};

export default Blogs;