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

export interface BookData {
    items?: BookItem[];
}

export interface Book extends BookInfo {
    description?: string;
}

