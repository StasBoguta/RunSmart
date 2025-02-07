$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1000,
        slidesToShow: 1,
        //adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/prevArrow.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/nextArrow.png"></button>',
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item){
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //modal
    $('[data-modal=consultation').on('click', function(){
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut();
    })
    

    $('.button_catalog').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn();
        })
    });

    

    function validateForms(form){
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    enail: true
                }
            },
            messages: {
                name: "Введите свое имя",
                phone: "Введите номер телефона",
                email: {
                    required: "Введите свой email",
                    email: "Введенный адрес не коректный"
                }
            }
        });
    };
    validateForms('.feed-form')
    validateForms('#consultation-form');
    validateForms('#order form');
    validateForms('#consultation form');
});