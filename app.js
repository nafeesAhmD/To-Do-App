import {auth} from './config.js'
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const register = document.getElementById('form');
let email = document.getElementById('email')
let password = document.getElementById('password')
let location = document.getElementById('location')


register.addEventListener('click',function(e){
  e.preventDefault()

    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    window.location = 'signin.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
})