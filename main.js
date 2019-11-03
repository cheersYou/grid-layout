let container = document.querySelector(".grid-container");

for (let i = 0; i < 9; i++) {
  let div = document.createElement("div");
  div.style.backgroundColor = "rgb(" + random() + "," + random() + "," + random() + ")";
  div.innerHTML = "item" + i
  container.appendChild(div)
}

function random() {
  let val = Math.random() * 255;
  return val
}