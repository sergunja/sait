$(document).ready(function(){
	$('.wrapper').on("click",function(){
		$('.overlay').show();
	});
	$('.popup-close').on("click",function(){
		$('.overlay').hide();
	});
});


$(document).ready(function(){
    $("#line").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$(document).ready(function(){
	    $("#menu").on("click","a", function (event) {
	        //отменяем стандартную обработку нажатия по ссылке
	        event.preventDefault();
	        //забираем идентификатор бока с атрибута href
	        var id  = $(this).attr('href'),
	        //узнаем высоту от начала страницы до блока на который ссылается якорь
	            top = $(id).offset().top;
	        //анимируем переход на расстояние - top за 1500 мс
	        $('body,html').animate({scrollTop: top}, 2000);
	    });
	});

	$(document).ready(function() {
    $(".mask-phone").mask("+38 (999) 999-99-99");
  });


	$(document).ready(function(){
		var link=$('.menu-link');
		var link_active=$('.menu-link_active');
		var menu=$('.menu-o');
		var nav_link=$('.menu-o a');
		link.click(function(){
			link.toggleClass('menu-link_active');
			menu.toggleClass('menu-o_active');
		});
		nav_link.click(function(){
			link.toggleClass('menu-link_active');
			menu.toggleClass('menu-o_active');
		});
	});