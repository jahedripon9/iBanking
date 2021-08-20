function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear the deposit input field

inputField.value = '';
    return amountValue;
}


function updateTotalField(totalFieldId, depositAmount){
    
    const totalField = document.getElementById(totalFieldId);
    const totalText = totalField.innerText;
    const previousTotal = parseFloat(totalText)

    const newDepositTotal = parseFloat(previousTotal) + depositAmount;
    
    totalField.innerText = newDepositTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if(isAdd == true){
        const newBalanceTotal = previousBalanceTotal + amount; 
        balanceTotal.innerText = newBalanceTotal;
    }
    
    else{
        const newBalanceTotal = previousBalanceTotal - amount; 
        balanceTotal.innerText = newBalanceTotal;
    }

}



// handle  Deposit Button Event

document.getElementById('deposit-btn').addEventListener('click', function () {
    
    const depositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total',depositAmount);
    updateBalance(depositAmount, true);
});
    // Get the Amount Deposit

    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);
    
    // console.log(depositAmount);

    // Update Deposit Total

    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText)

    // const newDepositTotal = parseFloat(previousDepositAmount) + newDepositAmount
    
    // depositTotal.innerText = newDepositTotal;

    

    // Update Blance

    // const blanceTotal = document.getElementById('blance-total');

    // const blanceTotalText = blanceTotal.innerText;
    // const previousBlanceTotal = parseFloat(blanceTotalText);

    // const newBlanceTotal = previousBlanceTotal + depositAmount; 
    // blanceTotal.innerText = newBlanceTotal;

    



    // clear the deposit input field

    // depositInput.value = '';



// handle Withdraw event handle

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);
});



    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText); 
    // console.log(withdrawAmountText);
   


    // set Withdraw Total 

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);


    // const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;

    

    
    // update Blance

    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // balanceTotal.innerText = newBalanceTotal;

    


    //  clear withdraw input

    // withdrawInput.value = '';
