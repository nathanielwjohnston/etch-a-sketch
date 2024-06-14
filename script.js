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

// gets random value between 0 and 255
function getRandomValue() {
    return Math.round(Math.random() * 255);
}

// mouseover bubbles
container.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("container")) {
        let square = e.target;
        square.classList.toggle("hovering");
        square.style.backgroundColor = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`
    }
})

button = document.querySelector("button");
button.addEventListener("click", () => {
    let gridSize = getGridSize();
    clearGrid();
    createGrid(gridSize);
})