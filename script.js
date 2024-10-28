const hamburger = document.getElementById('hamburger')
const showNav = document.getElementById('showNav');

hamburger.addEventListener('click',()=>{

   showNav.classList.remove('hidden')
   showNav.classList.add('flex')

})

document.getElementById('closeNav').addEventListener('click',()=>{
    showNav.classList.remove('flex')
    showNav.classList.add('hidden')
})