import Bookmark from "../Bookmak/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-400 rounded-xl mt-5">
            <div>
                <h3 className="text-2xl text-slate-800">Reading Time : {readingTime}</h3>
            </div>
            <h1 className="text-center text-xl">BookMarks {bookmarks.length}</h1>

            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx}
                     bookmark={bookmark}
                     readingTime={readingTime}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;