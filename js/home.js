document.getElementById("btn-add-money")
.addEventListener('click',function(event){
event.preventDefault();

const addMoney = getInputFieldValueById ("input-add-money");
const pinNumber =getInputFieldValueById ("input-pin-number")
// console.log(addMoney,pinNumber);
if (isNaN (addMoney)) {
    alert('failed to add money');
    return;
}


if (pinNumber===1234) {
    const balance = getTextFieldValueById("balance");
    // console.log(balance,addMoney);
    const newBalance = balance + addMoney;
    // console.log(newBalance);
      document.getElementById("balance").innerText =newBalance;

    // added to transaction history: 

    const p = document.createElement('p');
    p.innerText=` Addeded: ${addMoney} tk. new balance : ${newBalance}`;
    console.log(p);
    
    document.getElementById("transaction-container").appendChild(p);
}
else{
    alert('wrong pin or amount')
}
})