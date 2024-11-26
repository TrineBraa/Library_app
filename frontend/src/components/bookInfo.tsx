interface BookInfo {
    title: string;
    authors?:string[];
    publishedDate?: string;
    imageLinks?: {
        thumbnail?: string;
    };
}

interface BookItem {
    volumeInfo: BookInfo
}

interface BookData {
    items?: BookItem[];
}

export default BookData