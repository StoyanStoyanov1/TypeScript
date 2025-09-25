function bookShelf (input: string[]): string {
    const bookShelf: Shelf[] = [];
    const result: string[] = [];


    class Shelf {
        id: string;
        genre: string;
        books: Book[];

        constructor (id: string, genre: string) {
            this.id = id;
            this.genre = genre;
            this.books = [];
        }
    }

    class Book {
        title: string;
        author: string;
        genre: string;

        constructor (title: string, author: string, genre: string) {
            this.title = title;
            this.author = author;
            this.genre = genre;
        }
    }

    for (const el of input) {
        if (el.includes(' -> ')) {
            const [id, genre] = el.split(' -> ');
            const newShelf = new Shelf(id, genre);
            if (!(bookShelf.some(book => book.id === id))) {
                bookShelf.push(newShelf);
            }
        } else {
            const [bookTitle, authorGenre] = el.split(': ');
            const [author, genre] = authorGenre.split(', ');

            const foundShelf = bookShelf.find(shelf => shelf.genre === genre);

            if (foundShelf) {
                const newBook = new Book(bookTitle, author, genre);
                foundShelf.books.push(newBook);
            }
        }
    }

    const sortedShelf = bookShelf.sort((a, b) => b.books.length - a.books.length);
    
    for (const shelf of sortedShelf) {
        result.push(`${shelf.id} ${shelf.genre}: ${shelf.books.length}`);

        const sortedBooks = shelf.books.sort((a, b) => a.title.localeCompare(b.title));
        sortedBooks.forEach(book => {
            result.push(`--> ${book.title}: ${book.author}`);
        });
    }

    return result.join('\n');
}