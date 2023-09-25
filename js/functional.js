// Get The Inner Text
function getTheInnerText(elementId) {
    const element = document.getElementById(elementId);
    const elementTextStr = element.innerText;
    const innerText = parseFloat(elementTextStr);
    return innerText;
}

// get The Input Value
function getInputValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValueStr = element.value;
    const value = parseFloat(elementValueStr);
    return value;
};
// Set The inner Text
function setTheInnerText(elementId , value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
};
// Set The input Value

function setTheInputValue(elementId , value) {
    const element = document.getElementById(elementId);
    element.value = value;
}

// Get Percentage 
function getPercentageAmount (percen,amount) {
    const percentageAmount = percen / 100*amount;
    return percentageAmount;
};