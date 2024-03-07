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
    new Book("Возрождение", "Стивен Кинг", 2014),
    new Book("Цветы для Элджернона", "Дэниел Киз", 1959),
    new Book("Квест", "Борис Акунин", 2009)
  ];
  
  books.forEach(book => book.displayInfo());
  