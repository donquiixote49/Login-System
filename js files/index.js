var logInEmailInput = document.getElementById('loginEmailInput');
var logInPasswordInput = document.getElementById('loginPassInput');
var logInBtn = document.getElementById('loginBtn');
var signUpAnchor = document.getElementById('signupAnchor');

var userContainer = [];




if (localStorage.getItem('users') != null) {
    userContainer = JSON.parse(localStorage.getItem('users'));
}


// logIn Function start 

function logIn() {

if(logInEmailInput.value == "" || logInPasswordInput.value == ""){
    Swal.fire({
        icon: "error",
        text: "You must fill in all felids!",
    });
    return

}


if(isInputsCorrect(logInEmailInput.value, logInPasswordInput.value)){
    location.href = 'home.html';

}else {
    Swal.fire({
        icon: "error",
        text: "Incorrect Email Or Password!",
    });
}



}



logInBtn.addEventListener('click', function(){
    logIn()
})


// logIn Function end 




// InputsCorrect function start 

function isInputsCorrect(email, password) {
    for( var i=0  ; i<userContainer.length   ; i++  ) {

        if(userContainer[i].email == email && userContainer[i].password == password) {
            localStorage.setItem('userName', userContainer[i].name)
            return true
        }
    }
    return false
}


// InputsCorrect function end 


signUpAnchor.addEventListener('click', function(){
    location.href = 'signup.html'
})