function getInputFieldValueById (id){
    const inputValue = document.getElementById(id).value;
    
    inputNumber = parseFloat(inputValue)
    return inputNumber;
}

function getTextFieldValueById (id){
    const textValue = document.getElementById(id).innerText;
    
    textNumber = parseFloat(textValue)
    return textNumber;
}

function showSectionById(id){
    document.getElementById("add-money-form").classList.add('hidden');
    document.getElementById("cash-out-form").classList.add('hidden');
    document.getElementById("transaction-form").classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}