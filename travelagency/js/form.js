$(function(){
    console.log('Validation - Ready !');
    $(".phone").mask("+380 (99) 999-99-99"); 
    $('#form').validate({
      rules: {
        firstName: 'required',
        telephone: 'required',
        emailAddress: {
          required: true,
          email: true
        },
    
      },
      messages: {
        firstName: 'Это поле обязательно',
        telephone: 'Это поле обязательно',
        emailAddress: 'Пожалуйста, введите правильный Email',
      },
      errorElement: 'em',
      errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
  
        if (element.prop('type') === 'checkbox') {
          error.insertAfter( element.next('label'));
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid').removeClass('is-valid');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).addClass('is-valid').removeClass('is-invalid');
      }
    });
  });
  $(".js-form-send").on("click", function () {
    $(this)
        .closest("[data-form]")
        .find("[data-form-tab]")
        .removeClass("active");
    $(this)
        .closest("[data-form]")
        .find("[data-form-tab=2]")
        .addClass("active");
    return false;
});
$(".js-form-back").on("click", function () {
    $(this)
        .closest("[data-form]")
        .find("[data-form-tab]")
        .removeClass("active");
    $(this)
        .closest("[data-form]")
        .find("[data-form-tab=1]")
        .addClass("active");
});
 
