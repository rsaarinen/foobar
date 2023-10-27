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

// 4.
let teksti1 = document.getElementsByClassName("teksti")[0];
let teksti2 = document.getElementsByClassName("teksti")[1];
let teksti3 = document.getElementsByClassName("teksti")[2];
function changeColor(event) {
  event.target.style.color = "red";
}
teksti1.addEventListener("click", changeColor);
teksti2.addEventListener("click", changeColor);
teksti3.addEventListener("click", changeColor);

// 5.
elaimet = ["hirvi", "karhu", "orava", "käärme", "apina", "norsu", "hämähäkki"];
lista = document.getElementById("animals");
for (let i = 0; i < elaimet.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = elaimet[i];
  lista.appendChild(li);
}
