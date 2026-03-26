let myLib = [];
const bookWrapper = document.querySelector(".bookWrapper");
const openModal = document.querySelector(".btnBook");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".closeBtn");



const submit = document.getElementById("submit")


class Book{
    constructor(id, title, author, pages, read, about){
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.about = about;
    }
}

/*
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
*/

function addToLib(title, author, pages, read, about){
    let id = crypto.randomUUID(); //Unique identifier for every book
    const newBook = new Book(id, title, author, pages, read, about);
    myLib.push(newBook);
    showBooks(myLib);
}

addToLib("Roadside Picnic", "Strugatzki", 255, false, "Stalker doing Stalker things.");

function showBooks(myLib){
    bookWrapper.innerHTML = "";//sehr ineffizient wenn user viele Bücher hat

    myLib.forEach(book => {
        const card = document.createElement("div"); //erstellt das div in der die Buchkarte angezeigt wird
        
        card.innerHTML = 
                        `<h3 class="bookTitle">${book.title}</h3>
                        <div class="bookDetails">
                            <p><span>Author:</span> ${book.author}</p>
                            <p><span>Pages:</span> ${book.pages}</p>
                            <label>
                                <span>Read?</span>
                                    <input type="checkbox" class="checkRead" ${book.read ? 'checked' : ""}>
                            </label>
                        </div>
                        <p class="bookAbout"><span>About</span>: ${book.about}</p>
                        <button class="remove-btn" data-id="${book.id}">Remove</button>`; //data.id wird in javascript direkt in dataset gespeichert

        const checkRead = card.querySelector(".checkRead")
        checkRead.addEventListener("click", () => {
            book.toggleRead();
        });


        const removeBtn = card.querySelector(".remove-btn")
        removeBtn.addEventListener("click", (e) => {
            const btnID = e.target.dataset.id; //dataset kann direkt abgerufen werden, e.target = Button auf den geklickt wurde
            removeBook(btnID);
        });
        
        bookWrapper.appendChild(card);
        card.classList.add("card");
                        
    });
}

function removeBook(deleteID){
    myLib = myLib.filter(book => book.id !== deleteID); //Kopie von myLib, die deleteID wird herausgefiltert
    showBooks(myLib);
}

openModal.onclick = function() {
  modal.style.display = "block";
}


closeBtn.onclick = function(){
    modal.style.display = "none";
}

submit.addEventListener("click", (e) => {
        e.preventDefault(); //sonst wird die page komplett neu geladen, funktioniert nicht
        let title = document.querySelector('[name="title"]').value;
        let author = document.querySelector('[name="author"]').value;
        let pages = document.querySelector('[name="pages"]').value;
        let read = document.querySelector('[name="read"]').checked;
        let info = document.querySelector('[name="info"]').value;
        
        addToLib(title, author, pages, read, info);

        const form = document.querySelector("form");
        form.reset();
        modal.style.display = "none";
    })


Book.prototype.toggleRead = function(){
    this.read = !this.read;
};

