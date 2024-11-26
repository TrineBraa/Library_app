import axios from "axios";

const GetBooks = async (bookName:string) =>{
    try {
        const url = `http://127.0.0.1:5000/books/${bookName}`
        const getBooks= await axios.get(url)
        console.log(getBooks)
        return getBooks.data; 
        
    }catch (error) {
        console.error("Error fetching book details", error);
        throw error;
    }

};


export default GetBooks;