// Function to get input value
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputValue = parseFloat(inputFieldValue);
    return inputValue;
}

// Function to get element value
function setElementValueById(elementId, result) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = result;
}

// Function to set element value
function getElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldValue = elementField.innerText;
    const elementValue = parseFloat(elementFieldValue);
    return elementValue;
}