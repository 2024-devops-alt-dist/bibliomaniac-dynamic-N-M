const bookImgById = document.getElementById("bookimage");
const bookNameById = document.getElementById("bookname");
const authorNameById = document.getElementById("authorname");
const isbnById =  document.getElementById("isbn");
const descriptionById = document.getElementById("description");

const limiteCaractere = (element, maxChars) => {
    let text = element.innerText;
    if (text.length > maxChars) {
        element.innerText = text.substring(0, maxChars) + '...';
    }
};



async function ValidateTitleSearchBook(params) {
    result.innerHTML = "<h4>Résultats :</h4>";
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
            const book = data.items[0].volumeInfo;
            //console.table(data);
            
            data.items.forEach((element) => {

                console.log(element);
                const author = `<div class="auteur">${element.volumeInfo.authors[0]}</div>`;
                const cover = `<div class="cover"><img src="${element.volumeInfo.imageLinks.thumbnail}"/></div>`;
                const bookname = `<div class="bookname">${element.volumeInfo.title}</div>`;
                const id = element.id;
                const texte = element.volumeInfo.description;
                const limite = 180;
                const description = texte.length > limite ? texte.substring(0, limite) + '...' : texte;

                
                result.innerHTML += `<div class="item"> ${cover} <div class="item-content">${bookname}  ${author} <p class="description">${description} </p><a href="book.html?id=${id}">voir en détail :</a> </div></div>`;
               
        
                
                

            }
            );
            


      


            //bookImgById.src = book.imageLinks ? book.imageLinks.thumbnail
           

        }
        catch(error){
            alert(error.message);
        }
        
    }
    
}






const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');

async function afficherDetailsLivre(bookId) {
    console.log(bookId);
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
    const book = await response.json();
    
    // Exemple d'affichage des données dans la page
    document.getElementById('titrebook').innerText = book.volumeInfo.title;
    document.getElementById('auteur').innerText = book.volumeInfo.authors.join(', ');
    document.getElementById('description').innerText = book.volumeInfo.description;
  };




