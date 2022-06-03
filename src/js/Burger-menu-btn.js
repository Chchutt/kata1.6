let burgerBtnOpen = document.querySelector(".header__elem1");
let burgerMenu = document.querySelector(".mobile-menu-main-container");
let burgerBtnClose = document.querySelector(".menu-back");
let burgerBtnActive = document.querySelector(".active")
let statusBurgerMenu = true;
burgerBtnOpen.addEventListener("click", function (evt){
  evt.preventDefault();
  burgerMenu.classList.add("active");
})
burgerBtnClose.addEventListener("click", function (evt){
  evt.preventDefault();
  burgerMenu.classList.remove("active");
})

window.addEventListener("mouseup", function(e){
if (burgerMenu !== e.target) // если клик был не по нашему полю
{
  if (burgerMenu.classList.contains("active"))
  {
    burgerMenu.classList.remove("active");
  }
}
});
