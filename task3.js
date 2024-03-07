class Book {
    constructor(name, author, year) {
      this.name = name;
      this.author = author;
      this.year = year;
    }
    
    displayInfo() {
      console.log(`Название: ${this.name}, Автор: ${this.author}, Год: ${this.year}`);
    }
  }
  
  let books = [
    new Book("Книга 1", "Автор 1", 2000),
    new Book("Книга 2", "Автор 2", 2010),
    new Book("Книга 3", "Автор 3", 2020)
  ];
  
  books.forEach(book => book.displayInfo());
  