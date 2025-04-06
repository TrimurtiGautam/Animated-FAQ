const button = document.querySelector('.b');
const second = document.querySelector('.second');

button.addEventListener('click',()=>{
    second.classList.toggle('active')
});
