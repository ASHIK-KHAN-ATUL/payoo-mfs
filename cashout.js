// console.log('cash out js work ')

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('cashout button clicked')

    const cashOut = document.getElementById('input-cash-out').value;
    // console.log(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin-number').value;
    // 

    if( pinNumber === '001122'){
        // console.log('Money is reducing')
        const balance = document.getElementById('account-balance').innerText;
        // console.log(balance);

        const balanceNumber = parseFloat(balance);
        const cashOutNumber = parseFloat(cashOut);

        const newBalance = balanceNumber - cashOutNumber ;
        console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance ;
    }
    else{
        alert('Failed to cash out , Try again')
    }

})