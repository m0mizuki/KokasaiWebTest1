const button1 = document.querySelector("input");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const paragraph = document.querySelector('p');

button1.addEventListener("click", updateButton1);
button2.addEventListener("click", updateButton2);
button3.addEventListener("click", updateButton3);

function updateButton1() {
  paragraph.textContent="あいうえお";
}

function updateButton2() {
  paragraph.textContent="かきくけこ";
}

function updateButton3() {
  paragraph.textContent="さしすせそ";
}