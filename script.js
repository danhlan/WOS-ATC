document.addEventListener('DOMContentLoaded', () => {
  const wordSearchButton = document.getElementById('word-search');
  const crosswordButton = document.getElementById('crossword');
  const gameSelector = document.getElementById('game-selector');
  const bookSelector = document.getElementById('book-selector');
  const wordContainer = document.getElementById('word-container');
  const homeLink = document.getElementById('home-link');
  const backLink = document.getElementById('back-link');

  wordSearchButton.addEventListener('click', () => {
    gameSelector.style.display = 'none';
    bookSelector.style.display = 'block';
    backLink.style.display = 'inline';
  });

  crosswordButton.addEventListener('click', () => {
    gameSelector.style.display = 'none';
    bookSelector.style.display = 'block';
    backLink.style.display = 'inline';
  });

  const bookCards = document.querySelectorAll('.book-card');
  bookCards.forEach((card) => {
    card.addEventListener('click', () => {
      const book = card.dataset.book;
      bookSelector.style.display = 'none';
      wordContainer.style.display = 'block';
      loadBookContent(book);
    });
  });

  homeLink.addEventListener('click', () => {
    gameSelector.style.display = 'flex';
    bookSelector.style.display = 'none';
    wordContainer.style.display = 'none';
    backLink.style.display = 'none';
  });

  backLink.addEventListener('click', () => {
    gameSelector.style.display = 'none';
    bookSelector.style.display = 'block';
    wordContainer.style.display = 'none';
    backLink.style.display = 'inline';
  });
});

function loadBookContent(book) {
  // Fetch book data from a database or JSON file
  // and update the page with the book's content
  // (word search board, crossword board, word information, etc.)
  console.log(`Loading content for ${book}`);

  // Example:
  document.querySelector('.word-image').src = 'atcimage.jpg';
  document.querySelector('.word-title').textContent = 'Example Word';
  document.querySelector('.word-definition').textContent = 'This is an example word definition.';
}