document.getElementById("btn-cash-out")
.addEventListener('click',function(event){
event.preventDefault();

const inputCashOut = getInputFieldValueById("input-cash-out");
const inputCashOutPinNumber =getInputFieldValueById("input-cash-out-pin-number");

if (isNaN (inputCashOut)) {
    alert('failed to cash out');
    return;
}

if (inputCashOutPinNumber === 1234) {
    // console.log('deduct money to the account');
         // current balance:
         const balance = getTextFieldValueById("balance");
// console.log(balance);

if (inputCashOut>balance) {
    alert('you do not have enough money');
    return;
}

        const newBalance =  balance - inputCashOut;
        console.log(newBalance);
        
       document.getElementById("balance").innerText = newBalance; 

    //    add transaction history 

    const div = document.createElement('div');
    div.classList.add('text-5xl');
    div.innerHTML=`
    <h4 class= "text-red-500">Cash Out</h4>
    <p>withdraw: ${inputCashOut} new balance tk: ${newBalance}</p>

    `
document.getElementById("transaction-container").appendChild(div);
}
else{
    alert('failed to add money!please try again');
    
}


})