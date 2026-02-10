const myLib = [];

function Book (id, title, author, pages, read, about){
    if (!new.target){
        throw Error("'new' Operator must be used."); //won´t work without using 'new'
    }
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.about = about;
    this.info = function (){
        return this.about;
    };
    };

function addToLib(title, author, pages, read, about){
    let id = crypto.randomUUID();
    const newBook = new Book(id, title, author, pages, read, about);
    myLib.push(newBook);
}

addToLib("Roadside Picnic", "Strugatzki", 255, false, "Stalker doing Stalker things.");
console.log(myLib[0].info());



