import { useState } from "react";
import GetBooks from "../api-call";
import DisplayBooks from "./displayBooks";
import BookData from "./bookInfo"

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
        <h3>Get book details</h3>
        <input
        type="text"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        placeholder="Enter a book title"/>
        <button onClick={handleGetBook}>Search</button>

        {bookInfo && <DisplayBooks bookData={bookInfo}/>}
        </>
    );

}



export default SearchBooks;