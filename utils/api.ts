import {BookInterface} from "../types/interfaces";

export async function fetchBooks(): Promise<Array<BookInterface>> {
    const books:Array<BookInterface> = []
    const response = await fetch("http://127.0.0.1:3000/getBooks")
    if (response.ok) {
        let json = await response.json()
        json.books.forEach((book: any) => {
            books.push(<BookInterface>{
                title: book.Title,
                author: book.Author,
                pages: book.Pages,
            })
        })

    }
    return books;
}

