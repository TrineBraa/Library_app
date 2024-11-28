import { useState } from "react";
import GetBooks from "../api-call";
import DisplayBooks from "./displayBooks";
import { BookData } from "./bookInfo";

function SearchBooks() {
    const [bookName, setBookName] = useState<string>("");
    const [bookInfo, setBookInfo] = useState<BookData | null> (null);

    

    const handleGetBook = async () => {
        try {
            const data = await GetBooks(bookName);
            setBookInfo(data);
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <>
            <h2 className="flex justify-center text-2xl pb-2">Find books:</h2>
            <div className="flex justify-center pb-7">
                <h3></h3>
                <input
                type="text"
                className="w-60 bg-cyan-900 text-white border"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
                placeholder="Enter a book title"/>
                <button onClick={handleGetBook} className="w-20 border mx-1 h-8 bg-cyan-900 text-white hover:bg-cyan-600">Search</button>
            </div>
            {bookInfo && <DisplayBooks bookData={bookInfo}/>}
        </>
    );

}



export default SearchBooks;