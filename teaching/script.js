// 1.
let pushButton = document.getElementById("pushed");
pushButton.addEventListener("click", function () {
  pushButton.innerHTML = "pushed";
});

// 2.
let greenBtn = document.getElementById("greenBtn");
let yellowBtn = document.getElementById("yellowBtn");
let whiteBtn = document.getElementById("whiteBtn");

greenBtn.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "green";
});
yellowBtn.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "yellow";
});
whiteBtn.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "white";
});

// 3.
let divElement = document.getElementById("xy");
document.body.addEventListener("mousemove", function (a) {
  let coords = `X: ${a.clientX}, Y: ${a.clientY}`;
  divElement.innerText = coords;
  console.log(coords);
});
