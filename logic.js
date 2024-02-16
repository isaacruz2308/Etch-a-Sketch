document.addEventListener("DOMContentLoaded", () => {
  createGrid(16);

  document.querySelector(".reset-btn").addEventListener("click", () => {
    newGrid();
  });
});

function createGrid(size) {
  const container = document.querySelector(".grid-container");
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.innerHTML = "";
  const squareSize = container.offsetWidth / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener("mouseover", () => square.classList.add("colored"));
    container.appendChild(square);
  }
}

function newGrid() {
  let newSize = prompt("New size for grid (100 max): ");

  newSize = parseInt(newSize);

  if (!newSize || newSize > 100 || newSize <= 15) {
    alert("Invalid entry. Please enter a number from 16 to 100.");
    return;
  }
  createGrid(newSize);
}
