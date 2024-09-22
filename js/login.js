// console.log('Click is done')


// // document .get element by ID and add Event listener
// Step 1 set event handler
document.getElementById('button-login').addEventListener('click',function(event){
    // Step 2  prevent default behavior (prevent reloading browser) 
    event.preventDefault();
    console.log('login button clicked')

    // Step 3 get the phone number 
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);

    // Step 4 get the Pin 
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);
})