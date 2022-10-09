const selectorColor = document.querySelector("[type=color]");
const range = document.querySelector("[type=range]");
const number = document.querySelector("[type=number]");
const rangeVertical = document.querySelector(".range-vertical");
const numberVertical = document.querySelector(".number-vertical");
const rangeBlur = document.querySelector(".range-blur");
const numberBlur = document.querySelector(".number-blur");
const rangeSpread = document.querySelector(".range-spread");
const numberSpread = document.querySelector(".number-spread");
const rangeWidth = document.querySelector(".range-width");
const numberWidth = document.querySelector(".number-width");
const rangeHeight = document.querySelector(".range-height");
const numberHeight = document.querySelector(".number-height");
const rangeBorderRadius = document.querySelector(".range-border-radius");
const numberBorderRadius = document.querySelector(".number-border-radius");
const colorBox =document.querySelector(".color-box");
const square = document.querySelector(".square");
const button = document.querySelector("[type=button]");
const p = document.querySelector("p");

//Color//
selectorColor.addEventListener("input", (e) =>{
  square.style.boxShadow = `${range.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${selectorColor.value}`;
});

//horizontal//
range.addEventListener("input", (e) =>{
  rangeInputconnectionWithNumberInput(number, range);
});

number.addEventListener("input", (e)=>{
  rangeInputconnectionWithNumberInput(range, number);
});

//vertical//
rangeVertical.addEventListener("input", (e) =>{
  rangeInputconnectionWithNumberInput(numberVertical, rangeVertical);
});

numberVertical.addEventListener("input", (e)=>{
  rangeInputconnectionWithNumberInput(rangeVertical, numberVertical);
});

//blur//
rangeBlur.addEventListener("input", (e) =>{
  rangeInputconnectionWithNumberInput(numberBlur, rangeBlur);
});

numberBlur.addEventListener("input", (e)=>{
  rangeInputconnectionWithNumberInput(rangeBlur, numberBlur);
});

//Spread//
rangeSpread.addEventListener("input", (e) =>{
  rangeInputconnectionWithNumberInput(numberSpread, rangeSpread);
});

numberSpread.addEventListener("input", (e)=>{
  rangeInputconnectionWithNumberInput(rangeSpread, numberSpread);
});

//Width//
rangeWidth.addEventListener("input", (e) =>{
  numberWidth.value = rangeWidth.value;
  square.style.width = `${e.target.value}px`;
});

numberWidth.addEventListener("input", (e)=>{
  rangeWidth.value = numberWidth.value;
  square.style.width = `${e.target.value}px`;
});

//Height
rangeHeight.addEventListener("input", (e) =>{
  numberHeight.value = rangeHeight.value;
  square.style.height = `${e.target.value}px`;
});

numberHeight.addEventListener("input", (e)=>{
  rangeHeight.value = numberHeight.value;
  square.style.height = `${e.target.value}px`;
});

//Border Radius
rangeBorderRadius.addEventListener("input", (e) =>{
  numberBorderRadius.value = rangeBorderRadius.value;
  square.style.borderRadius = `${e.target.value}px`;
});

numberBorderRadius.addEventListener("input", (e)=>{
  rangeBorderRadius.value = numberBorderRadius.value;
  square.style.borderRadius = `${e.target.value}px`;
});

//color Box
colorBox.addEventListener("input", (e) =>{
  square.style.backgroundColor = `${e.target.value}`;
});

button.addEventListener("click", (e) =>{
  p.innerHTML = `box-shadow: ${range.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${selectorColor.value}`;
});

function rangeInputconnectionWithNumberInput (element1, element2) {
  element1.value = element2.value;
  square.style.boxShadow = `${range.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${selectorColor.value}`;
};