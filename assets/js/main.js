$(document).ready(function(){
	// $('.carousel').carousel({
	// 	interval: 7000,
	// 	pause: "hover"
	// });

	options = {
	   trigger : 'hover',
	}

  	$('[rel="popover"]').popover(options);

	var winWidth = $(window).width();

<<<<<<< HEAD
	$('.cb .details').each(function(){
		$(this).css('width', winWidth);
=======
	$('.thumb .glyphicon').on('load', function(){
        $(this).css('top', '50% !important');
	})

	//var counter = 0;
	//function start() {
	//	if(counter < 42) {
    //        counter++;
    //        console.log(counter);
	//		$('.carousel .carousel-inner').animate({left:"-=200"}, 8000, 'linear', start);
	//	};
	//}
	//start();
	//
	//$( ".carousel" ).mouseenter(function() {
	//  var myDiv = $( "div" );
	//  myDiv.clearQueue();
	//  myDiv.stop();
	//});
	//$( ".carousel" ).mouseleave(function() {
	//  start();
	//});

	$(".navbar li a[href^='#'], a.btn-buy[href^='#']").on('click', function(e) {
   		e.preventDefault();
   		var scrollto = ($(this.hash).offset().top - 50);
   		$('html, body').animate({ scrollTop: scrollto }, 400);

   		// edit: Opera requires the "html" elm. animated
>>>>>>> 1f34f9ceaf917133030ddf0723edf0fce9c5648b
	});


	// trigger the click on a item
	function morph(item) {

<<<<<<< HEAD
		var pos = item.offset(),
			posY = pos.top - $(window).scrollTop();
			w = item.outerWidth(),
			h = item.outerHeight(),
			close = item.find('.close');
=======
	$('.btn-process').click(function(){
		var thisbtn = $(this);

		if (thisbtn.hasClass('end')) {
			thisbtn.removeClass('end', 'start');
		} else {
			thisbtn.addClass('start');
>>>>>>> 1f34f9ceaf917133030ddf0723edf0fce9c5648b

		console.log(close);

		item.addClass('active');
		item.css('max-width', w);

		if($('html').hasClass('touch')) {
			//if (eventType === 'touchstart'){
            x = item.pageX;
            y = item.pageY;
        	//}

			item.css({'width': '320px', 'top': y, 'left': x, 'position': 'fixed', 'z-index': '9999'});
		} else {
			item.css({'width': w, 'top': posY, 'left': pos.left, 'position': 'fixed', 'z-index': '9999'});
		}

<<<<<<< HEAD
		setTimeout(function() {
			item.css({'max-width': '100%','width':'100%', 'height':'100%', 'top': '0px', 'left': '0px'});
			//$('.backdrop').show();
		}, 200);

=======
	$('#submit .btn-process').click(function(){
		$(this).addClass('start');
>>>>>>> 1f34f9ceaf917133030ddf0723edf0fce9c5648b
		setTimeout(function(){
			item.addClass('show');
			close.show();
		}, 700);

		setTimeout(function(){
			close.addClass('in');
		}, 800);
	};

<<<<<<< HEAD
	function closeDetail(item){
		var parent = item.parent();
			pos = parent.offset(),
			posY = pos.top - $(window).scrollTop();
			w = parent.width(),
			h = parent.height(),
			close = item.find('.close');
=======
	function upTotal() {
		var pgross = $('span#pgross').text(),
			pklein = $('span#pklein').text(),
			ptotal = parseInt(pgross) + parseInt(pklein);
		$('span#total').html('CHF ' + ptotal + '.-')
	}
>>>>>>> 1f34f9ceaf917133030ddf0723edf0fce9c5648b

		item.removeClass('show');
		close.removeClass('in');

		setTimeout(function(){
			item.css({'width': w, 'height': h, 'top': posY + 10, 'left': pos.left + 10, 'position': 'fixed', 'z-index': '9999'});
		}, 400);

		setTimeout(function(){
			close.hide();
			//$('.backdrop').hide();
		}, 800);

		setTimeout(function() {
			item.removeAttr('style');
			item.removeClass('active');
		}, 1000);
	};

	$('.add-toggle').on('click', function () {
		var t = $(this);
		$('.additional').toggleClass('in');
		t.toggleClass('in');
	});

	$('body').on('click', '.cb', function(e){
		var item = $(this);
		if (item.hasClass('active')) {

		} else {
			e.preventDefault();
			morph(item);
		}
	});

	$('body').on('click', '.active.cb .close', function(e){
		var item = $(this).parent();
		closeDetail(item);
	});

	//Message

	function notification() {

		$('.notification').hide();

		setTimeout(function(){
			var totalWidth = 0;

			$('.item').each(function(index) {
			    totalWidth += parseInt($(this).width());
			});

			if (totalWidth < 20) {
				$('.notification').show();
			} else {
				$('.notification').hide();
			}
		}, 800);
	}

	//Filter

	$('.filter').on('click', function(){
		var filter = $(this),
			group = filter.parent().attr('id')
			childs = $('#'+ group +'').children();

		childs.removeClass('active');

<<<<<<< HEAD
		childs.each(function(){
			$('body').removeClass(''+ $(this).data('name') +'');
		})
=======
  		if (oldValue > 0) {
      		var newVal = parseFloat(oldValue) - 1;
    	} else {
      		newVal = 0;
    	}

		choice.val(newVal);
>>>>>>> 1f34f9ceaf917133030ddf0723edf0fce9c5648b

		$('body').addClass(''+ filter.data('name') +'')
		filter.addClass('active');

		notification();
	});


	$('.category').click(function(e){
		var category = $(this),
			id = category.attr('id')

		console.log(id)

		category.toggleClass('active');
		$('body').toggleClass(''+ id +'');
		e.stopPropagation();

		notification();
	});

	$('.reset').on('click', function(e){
		e.preventDefault();
		$('body').removeAttr('class');
		$('body').addClass('me du ou go vo ex mo kn mi pr');
		$('.category').each(function(){
			$(this).addClass('active');
		});

		$('.btn-group.filter-group').each(function(){
			$(this).children().removeClass('active');
			$(this).children().first().addClass('active');
		});

		notification();
	});




	// $(".navbar li a[href^='#'], a.btn-buy[href^='#']").on('click', function(e) {
 //   		e.preventDefault();
 //   		var scrollto = ($(this.hash).offset().top - 50);
 //   		$('html, body').animate({ scrollTop: scrollto }, 400);

 //   		// edit: Opera requires the "html" elm. animated
	// });


	// $('#submit a.btn').attr('disabled', 'disabled').addClass('pull-right');
	// $('#submit a.btn .default').text('Bestellung aufgeben');

	$('.btn.process').click(function(){
		var thisbtn = $(this);

		if (thisbtn.hasClass('end')) {
			thisbtn.removeClass('end', 'start');
		} else {
			thisbtn.addClass('start');

			setTimeout(function(){
				thisbtn.addClass('end');
				thisbtn.removeClass('start');
			}, 3000);
		}
	});
});
