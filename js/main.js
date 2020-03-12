// document.addEventListener("DOMContentLoaded", function (event) {
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });
//   closeBtn.addEventListener('click', switchModal);
// });

// console.log('скрипт загрузился');
// console.log(modal);
// console.log(modalBtn);



// Выше - рабочий код JS  из 20 задания
// Ниже - тот же код на jQuery из 21 задания 



$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');


  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
});