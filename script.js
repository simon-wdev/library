let myLib = [];
const bookWrapper = document.querySelector(".bookWrapper")

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
    let id = crypto.randomUUID(); //Unique identifier for every book
    const newBook = new Book(id, title, author, pages, read, about);
    myLib.push(newBook);
}

addToLib("EINS", "Strugatzki", 255, false, "Stalker doing Stalker things.");
addToLib("Roadside Picnic", "Strugatzki", 255, false, "Stalker doing Stalker things.");
addToLib("ZWEI", "Strugatzki", 255, false, "Stalker doing Stalker things.");
addToLib("DREI", "Strugatzki", 255, false, "Stalker doing Stalker things.");

console.log(myLib[0].info());

function showBooks(myLib){
    bookWrapper.innerHTML = "";//vorsichtshalber, muss nicht sein

    myLib.forEach(book => {
        const card = document.createElement("div"); //erstellt das div in der die Buchkarte angezeigt wird
        
        card.innerHTML = 
                        `<h3>${book.title}</h3>
                        <p>Autor: ${book.author}</p>
                        <p>Seitenzahl: ${book.pages}</p>
                        <p>Gelesen: ${book.read}</p>
                        <p>Inhalt: ${book.about}</p>
                        <button class="remove-btn" data-id="${book.id}">Löschen</button>`

        const removeBtn = card.querySelector(".remove-btn")
        removeBtn.addEventListener("click", (e) => {
            const btnID = e.target.dataset.id;
            removeBook(btnID);
        });
        
        bookWrapper.appendChild(card);
        card.classList.add("card");
                        
    });
}

function removeBook(deleteID){
    myLib = myLib.filter(book => book.id !== deleteID);
    showBooks(myLib);
}

showBooks(myLib);


