// step-1 set event handler

document.getElementById("btn-login")
    .addEventListener('click', function (event) {
        // step-2 prevent default behaviour(prevent reloading browser)
        event.preventDefault();
        // console.log('login');
        // step-3 get the phone number &pin number
        const phoneNumber = document.getElementById("phone-number").value;
        const pinNumber = document.getElementById("pin-number").value;

        console.log(phoneNumber, pinNumber);

        // step-4 validate phoneNumber&pinNumber 

        if (phoneNumber === '5' && pinNumber === '1234') {
            console.log('you are logged in');
            window.location.href = '/home.html'
         // step-5 allow user to use the website 
        }
        else {
            alert('wrong phoneNumber or pinNumber');
        }
    })