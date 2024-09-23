// console.log('Click is done')


// // document .get element by ID and add Event listener
// Step 1 set event handler
document.getElementById('button-login').addEventListener('click',function(event){
    // Step 2  prevent default behavior (prevent reloading browser) 
    event.preventDefault();
    // console.log('login button clicked')

    // Step 3 get the phone number  and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);


    // Step 4 validate phone number and pin
    if(phoneNumber === '01841065033' && pinNumber === '001122'){
        console.log('You are logged in');
        // Step 5  allow user to the website
        window.location.href = '/home.html'
    }
    else{
        alert('Wrong phone number  or pin');
    }
})