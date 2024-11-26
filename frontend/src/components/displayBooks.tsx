import BookData from "./bookInfo";


interface DisplayBooksProps {
    bookData: BookData | null;
}

const DisplayBooks: React.FC<DisplayBooksProps> = ({ bookData }) => {
    if (!bookData || !bookData.items) {
        return <p>No books found.</p>;
    }

    return(
        <div>
            <h3>Results:</h3>
            <ul>
                {bookData.items.map((book, index) => (
                    <li key={index}>
                        <img src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"} alt={book.volumeInfo.title}/>
                        <h4>{book.volumeInfo.title}</h4>
                        <p>{book.volumeInfo.authors?.join(",") || "Unknown Author"}</p>
                        <p>{book.volumeInfo.publishedDate || "No publication Date"}</p>
                    </li>
                ))}
            </ul>
        </div>
    )


}

export default DisplayBooks;