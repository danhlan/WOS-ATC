// Add your custom JavaScript code here
document.addEventListener('DOMContentLoaded', () => {
  const wordSearchButton = document.getElementById('word-search');
  const crosswordButton = document.getElementById('crossword');
  const wordSearchContainer = document.getElementById('word-search-container');
  const crosswordContainer = document.getElementById('crossword-container');

  wordSearchButton.addEventListener('click', () => {
    wordSearchContainer.style.display = 'block';
    crosswordContainer.style.display = 'none';
  });

  crosswordButton.addEventListener('click', () => {
    crosswordContainer.style.display = 'block';
    wordSearchContainer.style.display = 'none';
  });

  // Add event listeners for book selection
  const bookLinks = document.querySelectorAll('.book-selector a');
  bookLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const book = event.target.dataset.book;
      // Load and display the selected book's content
      loadBookContent(book);
    });
  });
});

function loadBookContent(book) {
  // Fetch book data from a database or JSON file
  // and update the page with the book's content
  // (word search board, crossword board, word information, etc.)
  console.log(`Loading content for ${book}`);
}