const bookImgById = document.getElementById("bookimage");
const bookNameById = document.getElementById("bookname");
const authorNameById = document.getElementById("authorname");
const isbnById =  document.getElementById("isbn");
const descriptionById = document.getElementById("description");


async function ValidateTitleSearchBook(params) {
    result.innerHTML = "";
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
                const author = `<div class="info auteur">auteur:<b>${element.volumeInfo.authors[0]}</b></div>`;
                const cover = `<div class="cover"><img src="${element.volumeInfo.imageLinks.thumbnail}"/></div>`;

                result.innerHTML += `${author} ${element.volumeInfo.description} ${cover} </br>`;

            }
            );
            


      


            //bookImgById.src = book.imageLinks ? book.imageLinks.thumbnail
           

        }
        catch(error){
            alert(error.message);
        }
        
    }
    
}