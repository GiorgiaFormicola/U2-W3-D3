// save the library ENDPOINT
const libraryURL = "https://striveschool-api.herokuapp.com/books";

//create a function that create a card
const createBookCard = function (book) {
  const bookTitle = book.title;
  const bookImage = book.img;
  const bookPrice = book.price;

  const library = document.getElementById("library");
  library.innerHTML += `
<div class="col d-flex">
            <div class="card border-secondary w-100 d-flex flex-column">
             <img src="${bookImage}" class="" alt="Book Cover"/>
              <div class="card-body text-center d-md-flex flex-column gap-md-3 justify-content-end">
                <h5 class="card-title fs-2">${bookTitle}</h5>
                <p class="card-text fs-4">&euro; <span class="fs-4">${bookPrice}</span></p>
                <a href="" class="btn btn-outline-light fs-4 mb-1" id="discardButton">Discard</a>
              </div>
            </div>
          </div>
  `;
};

// create a function that make an HTTP REQUEST
const getBooks = function () {
  fetch(libraryURL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("ERROR IN GETTING THE LIBRARY DATA");
      }
    })
    .then((arrayOfBooks) => {
      console.log("BOOKS LIST", arrayOfBooks);

      arrayOfBooks.forEach((book) => {
        createBookCard(book);
      });
    })
    .catch((error) => {
      console.log("ERRORE", error);
    });
};

// call the HTTP REQUEST function
getBooks();
