var logOutBtn = document.getElementById('logOutBtn');
var userName = document.getElementById('userName');



userName.innerHTML = 'Welcome ' + localStorage.getItem('userName');


logOutBtn.addEventListener('click', function(){
    location.href = 'index.html';
});