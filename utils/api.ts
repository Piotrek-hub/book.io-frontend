import {BookInterface} from "../types/interfaces";

export async function fetchBooks(userKey: string): Promise<Array<BookInterface>> {
    console.log(userKey)
    const response = await fetch("http://127.0.0.1:3000/getBooks", {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userKey
        }),
    }).then(response => response.json())
    let books:Array<BookInterface> = response.books.map((book: any) => ({
            title: book.Title,
            author: book.Author,
            pages: book.Pages,
            dateCompleted: book.DateCompleted,
            status: book.Status,
        }))

    return books;
}

export async function login(login: string, password: string): Promise<string> {
    const resp = await fetch('http://127.0.0.1:3000/login',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login,
            password,
        }),
    }).then(response => response.json())
    if(resp.user_key === "User doesnt exists" ) {
        return ""
    }
    return resp.user_key
}

export function register(login: string, password: string) {
    fetch('http://127.0.0.1:3000/register',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login,
            password,
        }),
    }).then(response => response.json())
        .then(console.log)
}

