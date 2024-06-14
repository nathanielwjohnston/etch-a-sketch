container = document.querySelector(".container");

function createGrid(numberOfSquares) {
    for (i = 0; i < numberOfSquares; i++) {
        for (j = 0; j < numberOfSquares; j++) {
            newGridSquare = document.createElement("div");
            newGridSquare.classList.add("grid-square");
            newGridSquare.style.backgroundColor = "white";
            container.appendChild(newGridSquare);
        }
    }
    let basis = 100 / numberOfSquares;
    gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(square => {
        square.style.flexBasis = `${basis}%`;  
    });

    // For darkening effect
    container.style.backgroundColor = "black";
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
    let square = e.target;

    if (!square.classList.contains("container")) {
        if (!square.classList.contains("hovering")) {
            square.classList.toggle("hovering");
            square.style.opacity = "1";
        }
        square.style.backgroundColor = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`
    }
    if (square.style.opacity > 0) {
        square.style.opacity -= 0.1;
    }
})

button = document.querySelector("button");
button.addEventListener("click", () => {
    let gridSize = getGridSize();
    clearGrid();
    createGrid(gridSize);
})