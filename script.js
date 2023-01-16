// const addBook = document.getElementById(add-btn);

// const removeBook = document.getElementById(remove-btn);
const storedTitle = document.getElementById('stored-title')
const storedAuthor = document.getElementById('stored-autor');


let bookLists = [
  
];

const addBook = document.getElementById("form");
addBook.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookFunc();
});

let addBookFunc = () =>{
  let newObj = {};
  let title = document.getElementById("title").value;
  let author = document.getElementById("autor").value;

  newObj.id = bookLists.length;
  newObj.title = title;
  newObj.author = author;
  bookLists.push( newObj);

  // localStorage.setItem('books', JSON.stringify(bookLists));
 
}


let books =JSON.parse( localStorage.getItem('books'));
bookLists.push(books)
console.log(bookLists, books);

// for (let i = 0; i < books.length; i++) {
//   const element = books[i];
//   storedTitle.innerHTML = element.title;
//   storedAuthor.innerHTML = element.author
// }


// //function if storage available
// function storageAvailable(type) {
//   let storage;
//   try {
//     storage = window[type];
//     const x = '__storage_test__';
//     storage.setItem(x, x);
//     storage.removeItem(x);
//     return true;
//   }
//   catch (e) {
//     return e instanceof DOMException && (
//       // everything except Firefox
//       e.code === 22 ||
//       // Firefox
//       e.code === 1014 ||
//       // test name field too, because code might not be present
//       // everything except Firefox
//       e.name === 'QuotaExceededError' ||
//       // Firefox
//       e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//       // acknowledge QuotaExceededError only if there's something already stored
//       (storage && storage.length !== 0);
//   }
// }

// let availableStorage;
// if (storageAvailable('localStorage')) {
//   availableStorage= window.localStorage;
//   }
//   else {
//    availableStorage=null;
//    //no available
//   }
// ////// end strorage available test
// function booksRecoverData(){

// };

//   window.onload = () => {
//     booksRecoverData();
//      };
