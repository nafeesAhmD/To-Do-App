import { auth } from "./config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const getul = document.querySelector('#getul')
const showUser = document.querySelector('#showUser')


onAuthStateChanged(auth, (user) => {
    if (user) {
     
      const uid = user.email;
      showUser.textContent = uid
      console.log(uid)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

// showUser.innerHTML = showEmail

btn.addEventListener('click', () => {
    if(input.value == ""){
        alert("You must write something!")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = input.value
        getul.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '<i class="ri-close-fill"></i>'
        li.appendChild(span)
        li.querySelector('i').addEventListener('click', remove)
        function remove(){
            li.remove()
        }
       
    }
    input.value = ""
})
