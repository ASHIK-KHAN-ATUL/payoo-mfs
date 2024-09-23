// console.log('work well')

// // Add money to the Account

// Step 1 : add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent default behavior (prevent reloading browser) 
    event.preventDefault();
    // console.log('Add money button clicked');


    // Step 2 : get money to be added to the amount
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // Step 3 : verify pin number
    if(pinNumberInput === '001122'){
        console.log('Adding money to your account');


        // Step 4 : get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // Step 5 : add addMoneyInput with balance but before make number of  balance and addmoneybalance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber + addMoneyNumber ;
        console.log(newBalance);


          // Step 6 : update the balance in the UI/DOM 
          document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to add money! try again ');
    }
})