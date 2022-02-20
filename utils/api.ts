import {BookInterface} from "../types/interfaces";

export async function fetchBooks(): Promise<Array<BookInterface>> {
    const books:Array<BookInterface> = []
    try {
        const response = await fetch("http://127.0.0.1:3000/getBooks", {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        })
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
    }catch(e) {
        console.log(e)
    }


    return books;
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
    return resp.user_key
}