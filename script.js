// Create grid
container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
    newDiv = document.createElement("div");
    newDiv.classList.add("grid-square");
    container.appendChild(newDiv);
}

// mouseover bubbles
container.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("hovering")) {
        e.target.classList.toggle("hovering");
    }
})