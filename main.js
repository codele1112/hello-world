const $ = document.querySelector.bind(document);
const divName = document.createElement("p");
const display = $("h1");
divName.innerHTML = "Nguyen Duong Thuy Vy";
display.appendChild(divName);
