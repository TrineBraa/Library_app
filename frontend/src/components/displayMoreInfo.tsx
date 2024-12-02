import { Book } from "./bookInfo";


interface DisplayMoreInfo {
 book: Book;
 closeMoreInfo: () => void
}

const DisplayMoreInfo: React.FC<DisplayMoreInfo> = ({book, closeMoreInfo}) => {
  return (
    <div className="modal">    
      <div className="modalContent">
      <button className="butnClose bg-cyan-900 border px-1 mx-2 text text-white hover:bg-teal-950 " onClick={closeMoreInfo}>Close</button>
      <h2 className="text-3xl ml-48 my-1 bold">{book.title}</h2>
      <img src={book.imageLinks?.thumbnail || "placeholder"} alt={book.title}/>
      <p className="mb-2">Published: {book.publishedDate || "No publication Date"}</p>
      <p>Author: {book.authors?.join(",") || "Unknown Author"}</p>
      <p className="pb-5">Description: {book.description || "No description"}</p>
      
      <button className=" bg-cyan-900 border px-1 mx-2 text text-white hover:bg-teal-950 " onClick={closeMoreInfo}>Close</button>
      <button className="bg-cyan-900 border px-1 mx-2 text text-white hover:bg-teal-950 ">Add to library</button>
    </div>
  </div>
  )
}

export default DisplayMoreInfo
