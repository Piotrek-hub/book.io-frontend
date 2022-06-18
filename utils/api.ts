import {BookInterface} from "../types/interfaces";

export async function fetchBooks(username: string): Promise<Array<BookInterface>> {
    const response = await fetch("http://127.0.0.1:3000/getBooks", {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username
        }),
    }).then(response => response.json());

    if (response.success) {
        let books: Array<BookInterface> = response.books.map((book: any) => ({
            title: book.Title,
            author: book.Author,
            pages: book.Pages,
            dateCompleted: book.DateCompleted,
            status: book.Status,
        }))
        return books;
    } else {
        return []
    }
}

export async function login(login: string, password: string): Promise<string> {
    const response = await fetch('http://127.0.0.1:3000/login', {
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

    return response.success ? response.user_key : ""

}

export async function register(login: string, password: string): Promise<string> {
    const response = await fetch('http://127.0.0.1:3000/register', {
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


    return response.success > 0 ? response.userKey : ""

}

export async function addBook(userKey: string, user: string, title: string, author: string, pages: number, status: string,) {
    const data = {
        userKey,
        "username": user,
        title,
        author,
        pages,
        status,
    }
    await fetch("http://127.0.0.1:3000/addBook", {
        method: "post",
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export async function fetchUsers(): Promise<Array<string>> {
    const response = await fetch('http://127.0.0.1:3000/getUsers', {
        method: 'GET',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },

    }).then(response => response.json())
    return response.users.map((user: string) => (user))
}

