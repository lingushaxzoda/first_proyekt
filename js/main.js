let elbutton = document.querySelector(".btn");
let elButtonMenu = elbutton.querySelector(".btn__menu");
let elButtonExit = elbutton.querySelector(".btn__exit");
let elBox = document.querySelector(".header__box__best");



elbutton.addEventListener("click", function(evt){
   evt.preventDefault();

   elButtonMenu.classList.toggle("menu__exit");
   elButtonExit.classList.toggle("exit__menu");
   elBox.classList.toggle("nav__blok");
})
