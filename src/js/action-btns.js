let callbackBtn = document.querySelector(".call");
let feedbackBth = document.querySelector(".callback")
let modalCallback = document.querySelector(".modal__callback")
let modalFeedback = document.querySelector(".modal__feedback")
let BtnClose = document.querySelector(".menu-back");

for (let i = 0; i < document.getElementsByClassName('call').length; i++) {
  document.getElementsByClassName('call')[i].onclick = function (evt){
    evt.preventDefault();
    modalCallback.classList.add("activef");
  }
}
BtnClose.addEventListener("click", function (evt){
  evt.preventDefault();
  modalCallback.classList.remove("activef");
})
for (let i = 0; i < document.getElementsByClassName('callback').length; i++) {
  document.getElementsByClassName('callback')[i].onclick = function (evt){
    evt.preventDefault();
    modalFeedback.classList.add("activef");
  }
}
BtnClose.addEventListener("click", function (evt){
  evt.preventDefault();
  modalFeedback.classList.remove("activef");
})
