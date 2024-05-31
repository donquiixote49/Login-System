// * Global Var start

var signUpNameInput = document.getElementById('signNameInput');
var signUpEmailInput = document.getElementById('signEmailInput');
var signUpPassInput = document.getElementById('signPassInput');
var signUpBtn = document.getElementById('signBtn');
var logInAnchor = document.getElementById('loginAnchor')

var userContainer = [];


if (localStorage.getItem("users") != null) {
    userContainer = JSON.parse(localStorage.getItem("users")); 
}

//* Global Var start


//* signup function start 

function signUp() {

    var user = {
        name:signUpNameInput.value,
        email:signUpEmailInput.value,
        password:signUpPassInput.value,
    };


    if(
        signUpNameInput.value==="" ||
        signUpEmailInput.value==="" ||
        signUpPassInput.value=== ""
    ) {
    
        Swal.fire({
            icon: "error",
            text: "You must fill in all felids!",
        });
        return
        
    };


    if(
        isNameValid(signUpNameInput.value) &&
        isEmailValid(signUpEmailInput.value) && 
        isEmailNew(signUpEmailInput.value) &&
        isPassValid(signUpPassInput.value) 
    ) {
        userContainer.push(user);
        localStorage.setItem('users', JSON.stringify(userContainer));
        clearForm();
        // console.log(userContainer);

        Swal.fire({
            icon: "success",    
            text: "Thanks for signing up. ",
            
        });
    } 
    
    else {
        Swal.fire({
            icon: "error",
            text: "Invalid email or Email is already used",
        });
    }
}


signUpBtn.addEventListener("click", function () {
    signUp();
});


  //* signup function end
    


//* input validation start 

    function isEmailValid (email) {

        var emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm
        return emailRegex.test(email)

    }

    function isNameValid(name) {
        var nameRegex = /^[a-z0-9_-]{3,15}$/
        return nameRegex.test(name)

    }


    function isPassValid(password) {
        var passRegex = /[a-z0-9]{4,}/gmi
        return passRegex.test(password)

    }



    function isEmailNew(email){
        for( var i=0 ; i<userContainer.length ; i++  ) {
            if(userContainer[i].email == email) {
            return false;
            }     
            }
            return true;
        }

//* input validation end 

//* Clear Function start 

    function clearForm(){
        signUpNameInput.value = null    
        signUpEmailInput.value = null
        signUpPassInput.value = null

    }

    //* Clear Function end 




logInAnchor.addEventListener('click', function(){
    window.location.href = 'index.html';
})



