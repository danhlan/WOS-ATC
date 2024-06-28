document.addEventListener('DOMContentLoaded', () => {
  const wordSearchButton = document.getElementById('word-search');
  const crosswordButton = document.getElementById('crossword');
  const gameSelector = document.getElementById('game-selector');
  const bookSelector = document.getElementById('book-selector');
  const wordContainer = document.getElementById('word-container');
  const homeLink = document.getElementById('home-link');
  const backLink = document.getElementById('back-link');

  wordSearchButton.addEventListener('click', () => {
    currentGameType = 'WordSearch'; // Cập nhật currentGameType
    gameSelector.style.display = 'none';
    bookSelector.style.display = 'block';
    backLink.style.display = 'inline';
  });

  crosswordButton.addEventListener('click', () => {
    currentGameType = 'Crossword'; // Cập nhật currentGameType
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
    // Ẩn tất cả các container của sách trước khi hiển thị lại bookSelector
    const allBookContainers = document.querySelectorAll('.game-container');
    allBookContainers.forEach(container => {
      container.style.display = 'none';
    });
  
    // Cập nhật hiển thị cho bookSelector và các thành phần liên quan
    gameSelector.style.display = 'none';
    bookSelector.style.display = 'block';
    wordContainer.style.display = 'none';
    backLink.style.display = 'inline';
  });
});

function loadBookContent(book) {
  const allBookContainers = document.querySelectorAll('.game-container');
  allBookContainers.forEach(container => {
    container.style.display = 'none';
  });

  let selectedBookContainer;
  if (currentGameType === 'Crossword') {
    selectedBookContainer = document.getElementById(book + '-crossword');
  } else { // Mặc định là WordSearch
    selectedBookContainer = document.getElementById(book + '-wordsrearch');
  }

  if (!selectedBookContainer) {
    console.error('Selected book container not found for', book, 'and game type', currentGameType);
    return;
  }
  selectedBookContainer.style.display = 'block';

  // Xóa nội dung cũ và thêm nội dung mới dựa trên currentGameType và sách được chọn
  selectedBookContainer.innerHTML = ''; // Cẩn thận với việc sử dụng innerHTML do nguy cơ XSS

  if (currentGameType === 'WordSearch') {
    let content = '';
    if (book === 'book1') {
      content = `
        <img src="path/to/image1.jpg" alt="Hình ảnh cho Book 1">
        <p>Từ: ExampleWord1</p>
        <p>Nghĩa của từ: Definition of ExampleWord1</p>
      `;
    } else if (book === 'book2') {
      content = `
        <img src="path/to/image2.jpg" alt="Hình ảnh cho Book 2">
        <p>Từ: ExampleWord2</p>
        <p>Nghĩa của từ: Definition of ExampleWord2</p>
      `;
    }
    selectedBookContainer.innerHTML = content;
  }
  // Thêm xử lý cho Crossword hoặc các trò chơi khác nếu cần
}