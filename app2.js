const bookNameById = document.getElementById("bookname");



async function ValidateTitleSearchBook(params) {

const title = bookNameById.value;

    if(title === ""){
        alert("kindly add book title")
    }else {
        try{
            const response = await fetch('https://www.googleapis.com/books/v1/volumes?q='+title)

            if(!response.ok){
                throw new error ("book not found")
            }

            const data = await response.json();
            
            
            displayBooks(data.items);
        }
        catch(error){
            alert(error.message);
        }
    }
}


function displayBooks(books) {
    const container = document.getElementById("data-container");
    const template = document.getElementById("book-template").content;
    //console.log(book);

    books.forEach((book) => {
        const bookClone = template.cloneNode(true);
        const bookInfo = book.volumeInfo;
        const id = book.id;
        

        const coverUrl = bookInfo.imageLinks && bookInfo.imageLinks.thumbnail
        ? bookInfo.imageLinks.thumbnail
        : "https://via.placeholder.com/128x180?text=Pas+d'image";
    bookClone.querySelector(".book-image").src = coverUrl;

        bookClone.querySelector(".book-title").textContent =
            book.volumeInfo.title || "Titre non disponible";


            bookClone.querySelector(".book-title").textContent =
            book.volumeInfo.title || "Titre non disponible";

        

        bookClone.querySelector(".link-card").href = "book.html?id="+id;


        container.appendChild(bookClone);
    });
}