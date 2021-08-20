document.getElementById('login-submit').addEventListener('click', function(){
   
    // Get Your Email
    const emailfield = document.getElementById('your-email');
    const yourEmail = emailfield.value;
    // Get Your Passward
    const passwordfield = document.getElementById('your-passward');
    const yourPassword = passwordfield.value;


    if(yourEmail == 'user@ibanking.com' && yourPassword == 'User1234'){
        window.location.href = 'ibank-home.html'
    }
    else{
        window.alert('Wrong Email & Password')
    }
})

