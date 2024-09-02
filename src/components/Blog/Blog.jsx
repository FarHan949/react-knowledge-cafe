import PropTypes from 'prop-types'

const Blog = ({blog}) => {

    const {cover, title, author, author_img, reading_time, posted_date, hashtags} = blog
    return (
        <div>
            <img src={cover} alt={`cover picture for the title ${title}`} />
            
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                        <img className='w-14 rounded-3xl' src={author_img} alt="" /> 
                        <div className=''>
                            <h3 className='text-2xl'>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                </div>
                <div>
                    <div>
                          <span>{reading_time} min read</span>
                    </div>
                </div>
            </div>

            <h1 className='text-3xl'>{title}</h1>
            <p>
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