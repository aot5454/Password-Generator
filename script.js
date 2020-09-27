var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var symbolChar = "!@#$%^&*()_+/*-";
var numberChar = "0123456789";

var btn = document.getElementById("btn");
var copy = document.getElementById("pw-copy");
var text = document.getElementById("pw-textx");
var text2 = document.getElementById("pw-textx-input");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  len = document.getElementById("len").value;
  upper = document.getElementById("upper").checked;
  lower = document.getElementById("lower").checked;
  symbol = document.getElementById("symbol").checked;
  number = document.getElementById("number").checked;

  if (upper + lower + symbol + number == 0) {
    text.innerHTML = "Password-Generator";
    text2.value = "Password-Generator";
    alert("Checkbox is require!");
  } else {
    var pw = "";
    for (let i = 0; i < len; i++) {
      pw += randomX();
    }
    text.innerHTML = pw;
    text2.value = pw;
  }
});

function randomX() {
  strX = "";
  if (upper) {
    strX += upperChar.charAt(Math.floor(Math.random() * upperChar.length));
  }
  if (lower) {
    strX += lowerChar.charAt(Math.floor(Math.random() * lowerChar.length));
  }
  if (symbol) {
    strX += symbolChar.charAt(Math.floor(Math.random() * symbolChar.length));
  }
  if (number) {
    strX += numberChar.charAt(Math.floor(Math.random() * numberChar.length));
  }
  return strX.charAt(Math.floor(Math.random() * strX.length));
}

copy.addEventListener("click", function (e) {
  e.preventDefault();
  text2.select();
  document.execCommand("copy");
  alert("Copy already! Text: " + text2.value);
});
