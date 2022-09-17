//   localStorage.setItem("name","hamza");
//   localStorage.setItem("test","123");
//   console.log(localStorage.getItem("name"));
//   localStorage.removeItem("name");
//   localStorage.clear();

// register
let username=document.querySelector('#username');
let email=document.querySelector('#email');
let password=document.querySelector('#password');
let registerBtn = document.querySelector('#sign_up');

registerBtn.addEventListener('click',function(e){
    e.preventDefault();
    if (username.value=='' || email.value==''|| password.value==''){
        alert('3amer lfara4at sa7bi yezi ble bleda')
        console.log(e)
        console.log(username.value);
    }
    else {
        localStorage.setItem("username",username.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("password",password.value);
        
         setTimeout(()=>{
           window.location="login.html";
        }, 1500);
    }
});