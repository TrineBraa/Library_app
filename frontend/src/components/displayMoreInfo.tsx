import { Book } from "./bookInfo";

interface DisplayMoreInfo {
 book: Book;
 closeMoreInfo: () => void
}

const DisplayMoreInfo: React.FC<DisplayMoreInfo> = ({book, closeMoreInfo}) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <button onClick={closeMoreInfo}>Close</button>
    </div>
  )
}

export default DisplayMoreInfo
