const myLib = [];

function Book (id, title, author, pages, read, about){
    if (!new.target){
        throw Error("'new' Operator must be used.");
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
    id = crypto.randomUUID();
    title = new Book(id, title, author, pages, read, about);
    myLib.push(title);
}

addToLib("Roadside Picnic", "Strugatzki", 255, false, "Stalker doing Stalker things.");
console.log(myLib);



