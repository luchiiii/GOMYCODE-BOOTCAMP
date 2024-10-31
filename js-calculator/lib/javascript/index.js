//selection of all buttons on the calculaor screen
const calcButton = document.getElementsByClassName("calc-btn");

//select the calculator output
const calcOutput = document.getElementsByClassName("output")[0];

let isCalculatedValue = false;

//a function that helps us get calculator button value
function getCalcButtonValue(event) {
  //avoid adding new input if output current value is Syntax Error
  if (calcOutput.value === "Syntax Error") {
    return;
  }

  const operations = "+-*/.";

  //if block runs if isCalculated value is true
  if (isCalculatedValue) {
    if (operations.includes(event.target.value)) {
      isCalculatedValue = false;
      return (calcOutput.value += event.target.value);
    } else {
      isCalculatedValue = false;
      return (calcOutput.value = event.target.value);
    }
  }

  return (calcOutput.value += event.target.value);
}

//calculate the output vlaue using the inbuilt eval method in javascript
function calcOutputValue() {
  try {
    const result = eval(calcOutput.value);
    //change isCalculated value from false to true
    isCalculatedValue = true;

    return (calcOutput.value = result);
  } catch (error) {
    return (calcoutput.value = "Syntax Error");
  }
}

//clear calculator screen
function clearCalcScreen() {
  return (calcOutput.value = "");
}

//delete single calculator character
function deleteCalcCharacter() {
  return (calcOutput.value = calcOutput.value.splice(0, -1));
}

//loop over all calculator buttons selected above
for (let index = 0; index < calcButton.length; index++) {
  //add a click event listener to each button
  if (calcButton[index].value === "=") {
    calcButton[index].addEventListener("click", calcOutputValue);
  } else if (calcButton[index].value === "AC") {
    calcButton[index].addEventListener("click", clearCalcScreen);
  } else if (calcButton[index].value === "DC") {
    calcButton[index].addEventListener("click", deleteCalcCharacter);
  } else {
    calcButton[index].addEventListener("click", getCalcButtonValue);
  }
}
