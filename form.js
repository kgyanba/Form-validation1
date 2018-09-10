var button = document.querySelector('#button');
button.addEventListener('click',validate);
var msg = document.querySelector('#msg');
var reset = document.querySelector('#reset');
reset.addEventListener('click',clear);

// create a function

function validate() {
    var user = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    var confirm = document.querySelector('#confirm').value;
    var email = document.querySelector('#email').value;
    var number = document.querySelector('#number').value;
    var regexuser = /^[A-Za-z. ]{3,10}$/
    // Minimum eight characters, at least one letter, one number and one special character
    var regexpass =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
    var regexemail =  /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    var regexmobile = /^\d{3}\d{3}\d{4}$/

    if(user==='' || password==='' || confirm==='' || email==='' || number==='')
    {
        alert('please fill all the filled')
    }
    else
    {
        if(! regexuser.test(user))
        {
            displayMsg('please enter valid user name');
        }
        else if(! regexpass.test(password))
        {
            displayMsg('please enter a valid password');
        }
        else if(confirm === '')
        {
            displayMsg('please enter confirm password')
        }
        else if(password !== confirm)
        {
            displayMsg('password is not matching');
        }
        else if(! regexemail.test(email))
        {
            displayMsg('please enter a valid email');
        }
        else if(! regexmobile.test(number))
        {
            displayMsg('please enter a valid number');
        }
        else {
            localStorage.setItem('user',user);
            localStorage.setItem('password',password)
            localStorage.setItem('confirm',confirm)
            localStorage.setItem('email',email)
            localStorage.setItem('number',number)

            alert('form submitted successfully');
            user.value='';
            password.value=''
            confirm.value=''
            email.value=''
            number.value=''
        }
    }
}
function displayMsg(str) {
    msg.textContent = str;
    msg.style.color = 'red';
    msg.value =''
}
function clear() {
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    localStorage.removeItem('confirm');
    localStorage.removeItem('email');
    localStorage.removeItem('number');

}
