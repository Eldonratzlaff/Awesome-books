
const form = document.getElementById('form');

let arr = [

];

window.deleteBook = (id) => {
  const result = arr.filter((item) => item.id !== id);
  arr = result;
  localStorage.setItem('booklist', JSON.stringify(arr));
  window.location.reload();
};

function renderBooks(books) {
  localStorage.setItem('booklist', JSON.stringify(arr));
  const div = document.getElementById('books');
  const ul = document.createElement('ul');
  ul.innerHTML = `<li>${books.title}</li>
  <li>${books.author}</li>
  <button onclick=deleteBook(${books.id})>delete</button>`;
  div.appendChild(ul);
}
function addBook({ title, author }) {
  const books = {
    title,
    author,
    id: Date.now(),
  };
  arr.push(books);
  renderBooks(books);
}
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  addBook({ title, author });
});

window.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('booklist');
  if (ref) {
    const bookItems = JSON.parse(ref);
    arr = bookItems;
    bookItems.forEach((t) => {
      renderBooks(t);
    });
  }
});
