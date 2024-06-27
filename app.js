// Initialize the word search puzzle
function initWordSearchPuzzle(config) {
  // Get the puzzle data
  fetch(`https://appproject01.github.io/searchpuzzle/data/${config.book}.json`)
    .then(response => response.json())
    .then(puzzleData => {
      // Create the puzzle grid
      const puzzleGrid = createPuzzleGrid(puzzleData.grid);

      // Create the found words list
      const foundWordsContainer = document.createElement('div');
      foundWordsContainer.classList.add('found-words');

      // Render the puzzle
      const puzzleContainer = document.querySelector(config.containerSelector);
      puzzleContainer.appendChild(puzzleGrid);
      puzzleContainer.appendChild(foundWordsContainer);

      // Initialize the game logic
      initPuzzleGame(puzzleData, puzzleGrid, foundWordsContainer);
    });
}

// Create the puzzle grid
function createPuzzleGrid(gridData) {
  const grid = document.createElement('div');
  grid.classList.add('puzzle-grid');

  gridData.forEach(row => {
    const rowElement = document.createElement('div');
    row.forEach(cell => {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      cellElement.textContent = cell;
      rowElement.appendChild(cellElement);
    });
    grid.appendChild(rowElement);
  });

  return grid;
}

// Initialize the puzzle game logic
function initPuzzleGame(puzzleData, puzzleGrid, foundWordsContainer) {
  // Handle user interaction with the puzzle grid
  const cells = puzzleGrid.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
      // Implement your puzzle game logic here
      // For example, you can highlight the selected cell and check if the user has found a word
    });
  });

  // Update the found words list
  puzzleData.words.forEach(word => {
    const wordElement = document.createElement('div');
    wordElement.classList.add('found-word');
    wordElement.textContent = word;
    foundWordsContainer.appendChild(wordElement);
  });
}