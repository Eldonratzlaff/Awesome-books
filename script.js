// const addBook = document.getElementById(add-btn);

// const removeBook = document.getElementById(remove-btn);
const storedTitle = document.getElementById("stored-title");
const storedAuthor = document.getElementById("stored-autor");
const books = document.getElementById('books')
const addBook = document.getElementById("form");

let arr = [
  
];

addBook.addEventListener("submit", (e) => {
  e.preventDefault();
 
  let title = document.getElementById("title").value;
  let author = document.getElementById("autor").value;
  let obj = {};

  obj.title = title;
  obj.author = author;

  arr.push(obj)
  localStorage.setItem("book", JSON.stringify(arr));
  loadData();
});

function loadData(){
  const data = JSON.parse(localStorage.getItem("book"));
  data.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML = `title: `+ element.title;
    books.appendChild(li)
  });
}
const data = JSON.parse(localStorage.getItem("book"));
  data.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML = `title: `+ element.title;
    books.appendChild(li)
  });

  
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
