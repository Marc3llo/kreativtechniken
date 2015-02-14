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

	$('.cb .details').each(function(){
		$(this).css('width', winWidth);
	});


	// trigger the click on a item
	function morph(item) {

		var pos = item.offset(),
			posY = pos.top - $(window).scrollTop();
			w = item.outerWidth(),
			h = item.outerHeight(),
			close = item.find('.close');

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

		setTimeout(function() {
			item.css({'max-width': '100%','width':'100%', 'height':'100%', 'top': '0px', 'left': '0px'});
			//$('.backdrop').show();
		}, 200);

		setTimeout(function(){
			item.addClass('show');
			close.show();
		}, 700);

		setTimeout(function(){
			close.addClass('in');
		}, 800);
	};

	function closeDetail(item){
		var parent = item.parent();
			pos = parent.offset(),
			posY = pos.top - $(window).scrollTop();
			w = parent.width(),
			h = parent.height(),
			close = item.find('.close');

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

		childs.each(function(){
			$('body').removeClass(''+ $(this).data('name') +'');
		})

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
