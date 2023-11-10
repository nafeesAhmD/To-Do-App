import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const formIn = document.getElementById('formIn')
const iEmail = document.getElementById('iEmail')
const iPassword = document.getElementById('iPassword')
let showEmail;

formIn.addEventListener('submit', (e) => {
    e.preventDefault()
    
    signInWithEmailAndPassword(auth, iEmail.value, iPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    showEmail = user.email                     
    window.location = 'index1.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });


})