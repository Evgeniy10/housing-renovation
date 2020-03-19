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
// Ниже - тот же код на jQuery из 21 задания (и далее)



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

  var mySwiper = new Swiper('.swiper-container', { // Слайдер     
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next')
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  //валидация формы
  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userNameControl: {
        required: true,
        minlength: 2 // имя не менее 2 букв
      },
      userPhoneControl: {
        required: true,
        minlength: 17,
        
      },
      // правило объект (целый блок)  
      // onclick: true,
    }, // сообщения
    messages: { //для русского языка
      userNameControl: {
        required: "Заполните поле", 
        minlength: "Имя не короче двух букв", // имя не менее 2 букв
      },
      userPhoneControl: "Номер телефона обязателен",
    }
  });

  //маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {
    placeholder: "+7(___) ___-__-__"
  });



  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userNameFooter: {
        required: true,
        minlength: 2 // имя не менее 2 букв 
      },
      userPhoneFooter: {
        required: true,
        minlength: 17,
        
      },
      policyCheckboxFooter: {
        required: true,
      },
      // правило объект (целый блок)
      userQuestionFooter: {
        required: true,
        
      }
    }, // сообщения
    messages: {
      userNameFooter: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв", // имя не менее 2 букв
      },
      userPhoneFooter: "Номер телефона обязателен",
      userQuestionFooter: {
        required: "Укажите ваш вопрос",
      }
    }

  });


  //маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {
    placeholder: "+7(___) ___-__-__"
  });





  $('.modal__form').validate({
    errorClass: "invalid",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }
      error.insertAfter($(element));
    },
    rules: {
      // строчное правило
      userNameModal: {
        required: true,
        minlength: 2 // имя не менее 2 букв
      },
      userPhoneModal: {
        required: true,
        minlength: 17        
      },
      // userPhone: "required",
      // правило объект (целый блок)
      userEmailModal: {
        required: true,
        email: true
      },
    }, // сообщения
    messages: { //для русского языка
      userNameModal: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв", // имя не менее 2 букв
      },
      userPhoneModal: "Номер телефона обязателен",
      userEmailModal: {
        required: "Укажите email",
        email: "Введите корректный email" //Введите в формате name@domain.com
      }
    }
  });
  

  //маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {
    placeholder: "+7(___) ___-__-__"
  });

});

