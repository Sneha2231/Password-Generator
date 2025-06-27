const passwordOutput = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const generateBtn = document.getElementById("generate");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUM = "0123456789";
const SYMBOL = "!@#$%^&*()-_=+[]{}<>?/";

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", () => {
  let characters = "";
  if (uppercase.checked) characters += UPPER;
  if (lowercase.checked) characters += LOWER;
  if (numbers.checked) characters += NUM;
  if (symbols.checked) characters += SYMBOL;

  if (!characters) {
    passwordOutput.value = "Select at least one option!";
    return;
  }

  const length = lengthSlider.value;
  let pwd = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    pwd += characters[index];
  }

  passwordOutput.value = pwd;
});

copyBtn.addEventListener("click", () => {
  passwordOutput.select();
  document.execCommand("copy");
});