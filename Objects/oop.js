console.log("Se pueden crear objectos con clases de la siguiente forma: ");

class Vegetable {
    constructor(name, count){
        this.name = name;
        this.count = count;
    }
}

const carrot = new Vegetable('carrot', 19);
console.log(carrot);

// --------------------------------------------------------------------------------

console.log("\nTambién se puede usar los métodos setters y getters en los objetos: ");

class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel);
novel.writer = 'newAuthor';
console.log(novel);