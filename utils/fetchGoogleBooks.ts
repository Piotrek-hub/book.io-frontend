export async function fetchGoogleBooks(e: any): Promise<Array<string>>{
    e = e.replace(/ /g, "+")
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${e}`)
        .then(response => response.json())

    const bookInfo = response.items[0].volumeInfo;
    try {
        console.log(bookInfo)
        return [bookInfo.title, bookInfo.authors[0], bookInfo.pageCount]
    }catch(e) {
        console.log(e)
    }
    return []

}
