import { auth } from "./config.js";
import { showEmail } from "./signin.js";
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const getul = document.querySelector('#getul')
const showUser = document.querySelector('#showUser')

showUser.innerHTML = showEmail

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
