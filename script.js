const containerElement = document.querySelector(".container");
let size = 16;

const alertButton = document.querySelector("button");
alertButton.addEventListener("click", function () {
  size = prompt("Please enter desire size");
  size = parseInt(size, 10);
  console.log(size);
});

// Add 16 divs
for (let i = 1; i < size * size + 1; i++) {
  const divElement = document.createElement("div");
  containerElement.appendChild(divElement);
}

let allDiv = document.querySelectorAll(".container>div");
allDiv.forEach(function (div) {
  div.addEventListener("mouseover", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    div.style.backgroundColor = randomColor;
  });
});
