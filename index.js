const hamBurger = document.querySelector('.hamberger')
const navLink = document.querySelector('.active')
hamBurger.addEventListener("click",()=>{
    navLink.classList.toggle('active')
})