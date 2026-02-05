

function Book (title, author, pages, read, about){
    if (!new.target){
        throw Error("'new' Operator must be used.");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.about = about;
    this.info = function (){
        return this.about;
    };
    };

const derHobbit = new Book("Der Hobbit", 
                            "J.R.R Tolkien",
                            555,
                            false,
                            "Hobbit macht Sachen."
                        );


console.log(derHobbit.title);
console.log(derHobbit.info());



