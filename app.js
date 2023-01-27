
// PROJECT Section
console.log("PROJECT:\n==========\n");

//creates Book class
class Book {
    constructor(id, title, author, read) {
      this.id = id;
      this.title = title;
      this.author=author;
      this.read=read;
    }
}

//creates Library class
class Library {

    constructor(bookCount, books) {
        this.bookCount = bookCount;
        this.books = books;
    }

    //arrow function makes this follow the correct scoping
    markRead = (checkBox, id) => {
        for(let i=0;i<this.books.length;i++){
            if (this.books[i].id == id){
                this.books[i].read=true;
            }
        }
    }

    //arrow function makes this follow the correct scoping
    addBook = (e) => {
        //prevents form from refreshing
        e.preventDefault();

        //select the text inputs from the user and creates a book
        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const read = document.querySelector("#read").checked;
        const newBook = new Book(this.bookCount, title, author, read);

        //creates table cells for Author and title
        const tableRow=document.createElement("tr");
        const tableCell1= document.createElement("th");
        const tableCell2= document.createElement("th");

        //adds the title and author text inputs to the table cell values
        tableCell1.textContent=title;
        tableCell2.textContent=author;

        //creates the checkbox depending on the user's input + assigns it to the table cell value
        const checky=document.createElement("input");
        checky.type="checkbox";
        checky.checked = read;
        checky.disabled = true;

        //appends the table cells to the table row
        tableRow.append(tableCell1);
        tableRow.append(tableCell2);
        tableRow.append(checky);

        //selects the table body and appends table row to it
        const tb= document.querySelector("#tableBody");
        tb.append(tableRow);

        //adds the new user-inputted book to the library of books
        this.books.push(newBook);
        console.log('books', this.books);
        
        //adds the book to the book count
        this.bookCount +=1;
    }
}

//creates the first book in the library the and library
let firstBook = new Book (0,'Name of the Wind','Patrick Rothfuss',true);
let myLibrary = new Library (1, [firstBook]);

//makes the submit button work
const subButton= document.querySelector("button");
subButton.addEventListener("click", myLibrary.addBook);

