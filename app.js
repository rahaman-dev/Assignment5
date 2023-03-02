// go to blog page from of top the index page.
document.getElementById("blogBtn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

function getInputFieldValue(InputFlied) {
  let getInputFlied = document.getElementById(InputFlied);
  let getInputFliedValue = getInputFlied.value;

  // validation
  if (getInputFlied.value === "") {
    alert("input  field  is empty");
  } else {
    let convertGetInputFliedValue = parseFloat(getInputFliedValue);
    return convertGetInputFliedValue;
  }
}

// // create a function to create html element and set the element right side. and find dynamic value from card heading. and set the heading dynamically into right side.
let count = 0;
function createElementSetRight(getCrtElm, setCrtElm) {
  let getRightArea = document.getElementById(getCrtElm);
  count += 1;
  let crtSerial = document.createElement("span");
  getRightArea.appendChild(crtSerial);
  crtSerial.innerHTML = `<h5>${count}</h5>`;
  let crtHeading = document.createElement("h4");
  getRightArea.appendChild(crtHeading);
  let getHeading = document.getElementById(setCrtElm);
  let getHeadingValue = getHeading.innerText;
  crtHeading.innerText = getHeadingValue;
}

// create a function to create html three elements with subscript "2" and set the elements inside the right side.
function createElement(createElement, result) {
  let getRightArea = document.getElementById(createElement);
  let crtHeading = document.createElement("span");
  getRightArea.appendChild(crtHeading);
  crtHeading.innerText = result;
  let crtCmElement = document.createElement("span");
  crtHeading.appendChild(crtCmElement);
  crtCmElement.innerText = "cm";
  let crtSup = document.createElement("sup");
  crtCmElement.appendChild(crtSup);
  crtSup.innerText = "2";
}

// create function to create button dynamically and add this button on right side.
function createButtonSet(createButton) {
  let getRightArea = document.getElementById(createButton);
  let crtBtn = document.createElement("button");
  getRightArea.appendChild(crtBtn);
  crtBtn.innerText = "Covert to m";
  let crtSup = document.createElement("sup");
  crtBtn.appendChild(crtSup);
  crtSup.innerText = "2";
}

// Triangle card is completed
document.getElementById("BtnTriangle").addEventListener("click", function () {
  let firstFieldValue = getInputFieldValue("inputFliedTriangle1");
  let secondFieldValue = getInputFieldValue("getInputFliedTriangle2");
  //   let result = (firstFieldValue * secondFieldValue) / 2;
  let result = firstFieldValue * secondFieldValue * 0.5;
  let convertToDecimal = result.toFixed(2);
  createElementSetRight("right", "Triangle");
  createElement("right", convertToDecimal);
  createButtonSet("right");
});

// Rectangle card is completed
document.getElementById("BtnRectangle").addEventListener("click", function () {
  let firstFieldValue = getInputFieldValue("inputFieldRectangle1");
  let secondFieldValue = getInputFieldValue("inputFieldRectangle2");
  let result = firstFieldValue * secondFieldValue;
  let convertToDecimal = result.toFixed(2);
  createElementSetRight("right", "Rectangle");
  createElement("right", convertToDecimal);
  createButtonSet("right");
});

// Parallelogram card is completed
document
  .getElementById("ParallelogramBtn")
  .addEventListener("click", function () {
    let firstFieldValue = getInputFieldValue("inputFieldParallelogramBtn1");
    let secondFieldValue = getInputFieldValue("inputFieldParallelogramBtn2");
    let result = firstFieldValue * secondFieldValue;
    let convertToDecimal = result.toFixed(2);
    createElementSetRight("right", "Parallelogram");
    createElement("right", convertToDecimal);
    createButtonSet("right");
  });

// Rhombus card  is completed
document.getElementById("RhombusBtn").addEventListener("click", function () {
  let firstFieldValue = getInputFieldValue("inputFieldRhombusBtn1");
  let secondFieldValue = getInputFieldValue("inputFieldRhombusBtn2");
  //   let result = (firstFieldValue * secondFieldValue) / 2;
  let result = firstFieldValue * secondFieldValue * 0.5;
  let convertToDecimal = result.toFixed(2);
  createElementSetRight("right", "Rhombus");
  createElement("right", convertToDecimal);
  createButtonSet("right");
});

// Pentagon card is completed
document.getElementById("PentagonBtn").addEventListener("click", function () {
  let firstFieldValue = getInputFieldValue("inputFliedPentagon1");
  let secondFieldValue = getInputFieldValue("inputFliedPentagon2");
  //   let result = (firstFieldValue * secondFieldValue) / 2;
  let result = firstFieldValue * secondFieldValue * 0.5;
  let convertToDecimal = result.toFixed(2);
  createElementSetRight("right", "Pentagon");
  createElement("right", convertToDecimal);
  createButtonSet("right");
});

// Ellipse card is completed
document.getElementById("EllipseBtn").addEventListener("click", function () {
  let firstFieldValue = getInputFieldValue("inputFliedEllipse1");
  let secondFieldValue = getInputFieldValue("inputFliedEllipse2");
  let result = firstFieldValue * 3.142 * secondFieldValue;
  let convertToDecimal = result.toFixed(2);
  createElementSetRight("right", "Ellipse");
  createElement("right", convertToDecimal);
  createButtonSet("right");
});

// create some function to generate random color  and add these color on all card
window.onload = () => {
  backgroundColor();
};
function backgroundColor(getId, setColor) {
  document.getElementById(getId).addEventListener("mouseover", function () {
    let bgColor = generateRandomColorCode();
    document.getElementById(setColor).style.backgroundColor = bgColor;
  });
}
function generateRandomColorCode() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
let card1 = backgroundColor("card1", "card1");
let card2 = backgroundColor("card2", "card2");
let card3 = backgroundColor("card3", "card3");
let card4 = backgroundColor("card4", "card4");
let card5 = backgroundColor("card5", "card5");
let card6 = backgroundColor("card6", "card6");
