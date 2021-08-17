// handle  Deposit Button Event

document.getElementById('deposit-btn').addEventListener('click', function () {
    
    // Get the Amount Deposit

    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    // Update Deposit Total

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)

    const newDepositTotal = parseFloat(previousDepositAmount) + newDepositAmount
    
    depositTotal.innerText = newDepositTotal;

    // Update Blance

    const blanceTotal = document.getElementById('blance-total');

    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText);

    const newBlanceTotal = previousBlanceTotal + newDepositAmount; 
    blanceTotal.innerText = newBlanceTotal;





    // clear the deposit input field

    depositInput.value = '';
});


// handle Withdraw event handle

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText); 
    console.log(withdrawAmountText);


    // set Withdraw Total 

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);


    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update Blance

    const blanceTotal = document.getElementById('blance-total');
    const previousBlanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalText);
    const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;

    blanceTotal.innerText = newBlanceTotal;


    //  clear withdraw input

    withdrawInput.value = '';
})