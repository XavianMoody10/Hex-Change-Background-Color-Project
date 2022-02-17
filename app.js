"use strict";

const colorBg = document.querySelector("#background-color");
const colorSpan = document.querySelector("#background-color p span");
const colorBtn = document.querySelector("#background-color button");
colorBtn.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const colorArray = ["#427da8", "#11b9fe", "#19ef90", "#869f89"];
  const randomValue = Math.trunc(Math.random() * colorArray.length);
  colorBg.style.backgroundColor = colorArray[randomValue];
  colorBtn.style.backgroundColor = colorArray[randomValue];
  colorSpan.textContent = colorArray[randomValue];
  console.log(`${randomValue} : ${colorArray[randomValue]}`);
}

changeBackgroundColor();
