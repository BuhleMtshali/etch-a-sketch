let colorElement = document.getElementById("color-container");
let deleteBtn = document.getElementById("delete");
let squaresElement = document.querySelectorAll(".square");
const colors = [
  "rgb(255, 99, 71)", // Tomato
  "rgb(135, 206, 235)", // SkyBlue
  "rgb(60, 179, 113)", // MediumSeaGreen
  "rgb(255, 165, 0)", // Orange
  "rgb(123, 104, 238)", // MediumSlateBlue
  "rgb(240, 128, 128)", // LightCoral
  "rgb(0, 255, 127)", // SpringGreen
  "rgb(70, 130, 180)", // SteelBlue
  "rgb(255, 105, 180)", // HotPink
  "rgb(255, 255, 0)", // Yellow
];

squaresElement.forEach((square) => {
  square.addEventListener("mouseover", () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    square.style.backgroundColor = colors[randomIndex];
  });
});

deleteBtn.addEventListener("click", () => {
  squaresElement.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});
