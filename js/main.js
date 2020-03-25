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

  modalBtn.on('click', function () {      // основное
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
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }

      error.insertAfter($(element));
    },
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
      policyCheckboxControl: {
        required: "Подтвердите согласие",
      },
      userNameControl: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв", // имя не менее 2 букв
      },
      userPhoneControl: "Номер телефона обязателен",
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send2.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('AJax сработал. Ответ сервера: ' + response);

          $("#modal2").addClass("modal2--visible");    //модальное окно с сообщением успешной отправки              
          $("#modal2-close").click(function () { // закрытие этого модального окна
            $(".modal2").removeClass("modal2--visible");
          });            
          // alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();          // очистка полей формы
          modal.removeClass('modal--visible'); // закрыть модальное окно
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

  //маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {
    placeholder: "+7(___) ___-__-__"
  });


  $('.footer__form').validate({
    errorClass: "invalid",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }

      error.insertAfter($(element));
    },
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
      policyCheckboxFooter: {
        required: "Подтвердите согласие",
      },
      userNameFooter: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв", // имя не менее 2 букв
      },
      userPhoneFooter: "Номер телефона обязателен",
      userQuestionFooter: {
        required: "Укажите ваш вопрос",
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send3.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('AJax сработал. Ответ сервера: ' + response);

          $("#modal2").addClass("modal2--visible");    //модальное окно с сообщением успешной отправки              
          $("#modal2-close").click(function () { // закрытие этого модального окна
            $(".modal2").removeClass("modal2--visible");
          });  
          // alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();          // очистка полей формы
          modal.removeClass('modal--visible'); // закрыть модальное окно
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
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
      policyCheckboxModal: {
        required: "Подтвердите согласие",
      },
      userNameModal: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв", // имя не менее 2 букв
        checkbox: "Заполните поле"
      },
      userPhoneModal: "Номер телефона обязателен",
      userEmailModal: {
        required: "Укажите email",
        email: "Введите корректный email" //Введите в формате name@domain.com
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),        
        success: function (response) {
          console.log('AJax сработал. Ответ сервера: ' + response);  

          $("#modal2").addClass("modal2--visible");    //модальное окно с сообщением успешной отправки              
          $("#modal2-close").click(function () { // закрытие этого модального окна
            $(".modal2").removeClass("modal2--visible");
          });                  
          // alert('Форма отправлена, мы свяжемся с вами через 10 минут');          
          $(form)[0].reset();          // очистка полей формы
          modal.removeClass('modal--visible'); // закрыть модальное окно
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });


  //маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {
    placeholder: "+7(___) ___-__-__"
  });




  



  // создание яндекс карты

  



  setTimeout(function () {
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=d0e3d841-e5b9-4d80-80ab-fdd0a6045c41&lang=ru_RU&onload=createMap';
    document.getElementsByTagName('body')[0].appendChild(elem);    
  }, 5000);

  

});