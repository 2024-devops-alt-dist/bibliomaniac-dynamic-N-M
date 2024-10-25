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
