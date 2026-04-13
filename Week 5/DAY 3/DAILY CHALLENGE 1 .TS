interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string; // Optional property
}

class Library {
    // Encapsulation: only methods inside this class can touch the 'books' array
    private books: Book[] = [];

    public addBook(newBook: Book): void {
        this.books.push(newBook);
        console.log(`Added: "${newBook.title}"`);
    }

    public getBookDetails(isbn: string): string {
        const book = this.books.find(b => b.isbn === isbn);
        if (book) {
            return `${book.title} by ${book.author} (${book.publishedYear})`;
        }
        return "Book not found.";
    }

    // We make this 'protected' so that the child class (DigitalLibrary) can see it
    protected getAllBooks(): Book[] {
        return this.books;
    }
}

class DigitalLibrary extends Library {
    readonly website: string;

    constructor(website: string) {
        super(); // Initializes the base Library class
        this.website = website;
    }

    public listBooks(): string[] {
        // We use the protected method from the parent to get the titles
        return this.getAllBooks().map(book => book.title);
    }
}

// 1. Create the instance
const myLibrary = new DigitalLibrary("https://galaxy-archives.com");

// 2. Add Books
myLibrary.addBook({
    title: "A New Hope",
    author: "George Lucas",
    isbn: "123-456",
    publishedYear: 1977,
    genre: "Sci-Fi"
});

myLibrary.addBook({
    title: "The Empire Strikes Back",
    author: "Donald F. Glut",
    isbn: "789-012",
    publishedYear: 1980
});

// 3. Print Details
console.log("--- Library Website ---");
console.log(myLibrary.website);

console.log("--- Searching for ISBN 123-456 ---");
console.log(myLibrary.getBookDetails("123-456"));

console.log("--- All Titles ---");
console.log(myLibrary.listBooks());

