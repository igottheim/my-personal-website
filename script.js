const h2 = document.createElement("h2");
h2.textContent = "Ian's Running Page!";
document.querySelector("body").appendChild(h2);
const a = document.getElementById("demo");

function mouseOver() {
  a.style.color = "red";
}

function mouseOut() {
  a.style.color = "black";
}

a.addEventListener("mouseover", mouseOver);
a.addEventListener("mouseout", mouseOut);
