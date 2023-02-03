const menuEL = document.querySelector('.menu');
const menuTextEL = document.querySelector('.menu p');
const socialListsEl = document.querySelector('.social-list');
const listEl = document.querySelectorAll('.social-list li');


menuEL.addEventListener('click',() => {
    socialListsEl.classList.toggle('hide');
    menuEL.classList.toggle('rotate');
    
});


listEl.forEach(liEl => {
    liEl.addEventListener('click',()=>{
        menuTextEL.innerHTML = liEl.innerHTML;
        socialListsEl.classList.add('hide');
        menuEL.classList.toggle('rotate');
    })
})