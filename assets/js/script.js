function tabs(n)
{
  $('.tabs-nav a').removeClass('active');
  $('.tabs-nav a.t'+n).addClass('active');
  $('.tabs-block').fadeOut(0);
  $('.tabs-block.tab_'+n).fadeIn(222);
};

$(document).ready(function() {
/*=========Menu===========*/
	$(".header__link_drop").on("click", function(e) {
	  	if ($(window).width() > 990){
	        e.stopPropagation();
			$(this).toggleClass('active');
			$(".menu").fadeToggle(333);
			$(".lang__select").removeClass("active");
			$(".lang__select").next().fadeOut(333);
    	} else {
    		$(this).toggleClass('active');
			$(".menu").slideToggle(333);
    	};
	});
	$(document).on("click", function() {
    	if ($(window).width() > 990){
	        $(".header__link_drop").removeClass('active');
    		$(".menu").fadeOut(333);
    	};
  	});
/*=========/menu==========*/

/*=========Burger=========*/
$(".header__burger").on("click", function() {
	$("body").toggleClass('hidden');
	$(this).toggleClass('active');
	$(".header__nav").toggleClass('active');
	$(".header__logo").toggleClass('active');
	$(".header").toggleClass('active');
});
/*========/burger=========*/

/*======Lang=============*/
	$(".lang__select").on("click", function(e) {
		if ($(window).width() > 990){
	        e.stopPropagation();
		    $(this).next().fadeToggle(333);
		    $(".lang__select").not(this).next().slideUp(333);
		    $(this).toggleClass('active');
		    $(".header__link_drop").removeClass('active');
			$(".menu").fadeOut(333);
    	} else {
    		$(this).next().slideToggle(333);
		    $(".lang__select").not(this).next().slideUp(333);
		    $(this).toggleClass('active');
    	};
	});
	$(".lang__option").on("click", function() {
		if ($(window).width() > 990){
	        $(this).parents(".lang").find(".lang__option").removeClass('selected');
			$(this).parents(".lang").find('.lang__select span').html($(this).find("span").html());
			$(this).parents(".lang").find('.lang__select').removeClass('active');
			$(this).parents(".lang__dropdown").fadeOut();
			$(this).addClass('selected');
    	} else {
    		$(this).parents(".lang").find(".lang__option").removeClass('selected');
			$(this).parents(".lang").find('.lang__select span').html($(this).find("span").html());
			$(this).parents(".lang").find('.lang__select').removeClass('active');
			$(this).parents(".lang__dropdown").slideUp();
			$(this).addClass('selected');
    	};
	});

	$(document).on("click", function() {
		if ($(window).width() > 990){
	        $(".lang__select").removeClass('active');
	    	$(".lang__dropdown").fadeOut(333);
    	};
	});
/*==========/lang=========*/

  /*=====Add=======*/
  var dropZone = $('.add-container');

  dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
     return false;
  });

  dropZone.on('dragover dragenter', function() {
     dropZone.addClass('dragover');
  });

  dropZone.on('dragleave', function(e) {
     dropZone.removeClass('dragover');
  });

  dropZone.on('dragleave', function(e) {
     let dx = e.pageX - dropZone.offset().left;
     let dy = e.pageY - dropZone.offset().top;
     if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
          dropZone.removeClass('dragover');
     };
  });

  dropZone.on('drop', function(e) {
     dropZone.removeClass('dragover');
     let files = e.originalEvent.dataTransfer.files;
     sendFiles(files);
  });

  $('#file-input').change(function() {
     let files = this.files;
     sendFiles(files);
  });

  function sendFiles(files) {
     let maxFileSize = 5242880;
     let Data = new FormData();
     $(files).each(function(index, file) {
          if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
               Data.append('images[]', file);
          }
     });
};
  /*=========/add==========*/

  /*=========Steps=========*/
$(".steps__item").on("click", function() {
	if ($(window).width() > 990){
	    $(this).addClass('active');
	    $(this).find(".steps__photo").fadeIn();
		$(".steps__item").not(this).removeClass('active');
		$(".steps__item").not(this).find(".steps__photo").fadeOut();
    } else {
    	$(this).addClass('active');
		$(".steps__item").not(this).removeClass('active');
		$(this).find(".steps__photo").slideDown();
		$(".steps__item").not(this).find(".steps__photo").hide();
    };
});
/*========/steps=========*/

  /*=========Faq=========*/
$(".faq__item").on("click", function() {
	$(this).toggleClass('active');
	$(".faq__item").not(this).removeClass('active');
	$(this).find(".faq__answer").slideToggle(333);
	$(".faq__item").not(this).find(".faq__answer").slideUp(333);
});
/*========/faq=========*/

  /*========Reviews__slider========*/
    new Swiper('.reviews__slider', {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    resizeReInit: true,
    navigation: {
      prevEl: '.reviews .slider-arrow_prev',
      nextEl: '.reviews .slider-arrow_next',
    },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }
  });
/*=======/reviews__slider========*/

/*========Blog__slider========*/
    new Swiper('.blog__slider', {
    slidesPerView: 3,
    spaceBetween: 24,
    resizeReInit: true,
    navigation: {
      prevEl: '.blog .slider-arrow_prev',
      nextEl: '.blog .slider-arrow_next',
    },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }
  });
/*=======/blog__slider========*/
});