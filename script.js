// const addBook = document.getElementById(add-btn);
// const removeBook = document.getElementById(remove-btn);
const form = document.getElementById("form");

let arr = [
  
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
 
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  addBook({ title, author });
});

function renderBooks(books) {
  localStorage.setItem("booklist", JSON.stringify(arr));
  let div = document.getElementById("books");
  let ul = document.createElement("ul");
  ul.innerHTML = `<li>${books.title}</li>
  <li>${books.author}</li>
  <button onclick=deleteBook(${books.id})>delete</button>`;
  div.appendChild(ul);
}

function addBook({ title, author }) {
  let books = {
    title,
    author,
    id: Date.now(),
  };
  arr.push(books);
  renderBooks(books);
}

function deleteBook(id) {

  let result = arr.filter(item => item.id !== id);
  arr = result;
  localStorage.setItem("booklist", JSON.stringify(arr));
  window.location.reload()
  
}

window.addEventListener("DOMContentLoaded", (e) => {
  const ref = localStorage.getItem("booklist");
  if (ref) {
    bookItems = JSON.parse(ref);
    arr = bookItems;
    bookItems.forEach((t) => {
      renderBooks(t);
    });
  }
});

// function loadData(){
//   const data = JSON.parse(localStorage.getItem("book"));
//   data.forEach(element => {
//     const li = document.createElement('li');
//     li.innerHTML = `title: `+ element.title;
//     books.appendChild(li)
//   });
// }
// const data = JSON.parse(localStorage.getItem("book"));
//   data.forEach(element => {
//     const li = document.createElement('li');
//     li.innerHTML = `title: `+ element.title;
//     books.appendChild(li)
//   });

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
