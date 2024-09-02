import PropTypes from 'prop-types'
import { BsBookmarkStar } from "react-icons/bs";

const Blog = ({blog, handelAddToBookmark}) => {

    const {cover, title, author, author_img, reading_time, posted_date, hashtags} = blog
    return (
        <div className='mb-16'>
            <img className='w-4/5 mb-3 rounded' src={cover} alt={`cover picture for the title ${title}`} />
            
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                        <img className='w-14 rounded-3xl' src={author_img} alt="" /> 
                        <div className=''>
                            <h3 className='text-xl'>{author}</h3>
                            <p className='text-sm'>{posted_date}</p>
                        </div>
                </div>
                <div>
                    <div className='text-sm mr-40 flex text-justify'>
                          <span>{reading_time} min read</span>
                          <button onClick={()=>handelAddToBookmark(blog)} className='ml-2 text-2xl text-red-400'><BsBookmarkStar></BsBookmarkStar></button>
                    </div>
                </div>
            </div>

            <h1 className='text-3xl'>{title}</h1>
            <p className='text-slate-500'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.PropTypes = {
    Blog : PropTypes.object.isRequired
}
export default Blog;