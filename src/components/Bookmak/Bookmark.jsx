import React from 'react';

const Bookmark = ({bookmark}) => {
    return (
        <div> 
            <h3 className='text-2xl bg-slate-200 p-4 m-4 rounded-xl'
            >{bookmark.title}</h3>
        </div>
    );
};

export default Bookmark;