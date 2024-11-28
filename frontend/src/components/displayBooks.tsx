import { useState } from "react";
import DisplayMoreInfo from "./displayMoreInfo";
import { BookData } from "./bookInfo";


interface DisplayBooksProps {
    bookData: BookData | null;   
}

interface Book {
    title: string;
    authors?:string[];
    publishedDate?: string;
    description?: string;
    
    imageLinks?: {
        thumbnail?: string;
    };
}


const DisplayBooks: React.FC<DisplayBooksProps> = ({ bookData }) => {

    const [showBookInfo, setShowBookInfo] = useState(false)
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);


    if (!bookData || !bookData.items) {
        return <p>No books found.</p>;
    }

    const openMoreInfo = (book: Book) => {
        setShowBookInfo(true)
        setSelectedBook(book)
        console.log (selectedBook)
    }

    const closeMoreInfo = () => {
        setSelectedBook(null)
        setShowBookInfo(false)
    }

    return(
        <>
          
            <div className=" pl-20 flex flex-wrap ">
                    {bookData.items.map((book, index) => (
                        <div key={index} className=" px-4 py-4 mx-4 mb-4 bg-cyan-900 w-80 text-white">
                                <img src={book.volumeInfo.imageLinks?.thumbnail || "placeholder"} alt={book.volumeInfo.title}/>
                                <h4>Title: {book.volumeInfo.title}</h4>
                                <p>Author(s): {book.volumeInfo.authors?.join(",") || "Unknown Author"}</p>
                                <p className="mb-2">Published: {book.volumeInfo.publishedDate || "No publication Date"}</p>
                                <button className="bg-teal-600 border px-1 hover:bg-teal-950" onClick={() => openMoreInfo(book.volumeInfo)}>More info</button>
                                <button className="bg-teal-600 border px-1 mx-2 hover:bg-teal-950 ">Add to library</button>
                        </div>
                    ))}
            </div>
            {showBookInfo && selectedBook && (
                <DisplayMoreInfo book={selectedBook} closeMoreInfo={closeMoreInfo}/>
            )}
        </>
    )


}

export default DisplayBooks;