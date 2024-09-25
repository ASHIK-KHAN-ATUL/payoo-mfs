// SHOW THE CASH OUT FORM

document.getElementById('btn-show-cash-out').addEventListener('click', function(){

    // show cash out button
    // console.log('cash out butoon clicked')
    document.getElementById('cash-out-form').classList.remove('hidden');
    // hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
})

// SHOW THE ADD MONEY  FORM

document.getElementById('btn-show-add-money').addEventListener('click', function(){
    // show the addmoney form
    document.getElementById('add-money-form').classList.remove('hidden');

    // hide cash out  form
    document.getElementById('cash-out-form').classList.add('hidden');
})