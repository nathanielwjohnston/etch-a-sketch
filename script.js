// Create grid
container = document.querySelector(".container");

function createGrid(numberOfSquares) {
    for (i = 0; i < numberOfSquares; i++) {
        for (j = 0; j < numberOfSquares; j++) {
            newGridSquare = document.createElement("div");
            newGridSquare.classList.add("grid-square");
            container.appendChild(newGridSquare);
        }
    }
    let basis = 100 / numberOfSquares;
    gridSquares = document.querySelectorAll(".grid-square");
    console.log(gridSquares);
    gridSquares.forEach(square => {
        square.style.flexBasis = `${basis}%`;  
    });
}

function clearGrid() {
    gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(square => {
        square.remove();
    })
}

function getGridSize() {
    while (true) {
        gridSize = prompt("Enter grid size");
        if (gridSize <= 100) {
            return gridSize;
        }
    }
}

// mouseover bubbles
container.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("hovering") && !e.target.classList.contains("container")) {
        e.target.classList.toggle("hovering");
    }
})

button = document.querySelector("button");
button.addEventListener("click", () => {
    let gridSize = getGridSize();
    clearGrid();
    createGrid(gridSize);
})