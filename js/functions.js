// Google Maps
	var map;
	var icon_marker = 'http://www.discusholdings.com/wp-content/themes/discus/img/map-marker.png';
	function initMap() {
		
		var marker_position = new google.maps.LatLng(35.899202,14.515873);
		var address = marker_position;
		
		var stylez = [
			{
				featureType: "all",
				elementType: "all",
				stylers: [
					{ saturation: -100 }
				]
			}
		];
		var mapOptions = {
			zoom: 17,
			scrollwheel: false,
			center: address,
			disableDefaultUI: true,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
			}
		};
		map = new google.maps.Map(document.getElementById("contacts-map"), mapOptions);

		var marker = new google.maps.Marker({
			place: {
				location: address,
				query: 'Zerafa Advocates'
			},
			map: map,
			title: 'Zerafa Advocates',
			icon: icon_marker
		});

		var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });
		map.mapTypes.set('tehgrayz', mapType);
		map.setMapTypeId('tehgrayz');
	}
	
	var myElem = document.getElementById('contacts-map');
	if (myElem !== null) {
		initMap();
	}

jQuery(document).ready(function($) {
	
	if ($(".tabs").length) {
		$(".tabs").tabslet({
					
		});
	}
	
	$('.accordion-head').click(function () {
		
        $(this).next('.accordion-body').slideToggle(300, function(){
            equalHeight('.participant-info');
        });
		$(this).toggleClass('active');
		/*$(this).siblings().each(function() {
			if($(this).next('.accordion-body').is(':visible')) {
				$(this).removeClass('active');
				$(this).next('.accordion-body').slideUp(300);
			}
		});*/
    });
	
	$('.accordion-close').click(function () {
		
        $(this).closest('.accordion-body').slideToggle(300);
		$(this).closest('.accordion-body').prev('.accordion-head').toggleClass('active');
		
    });
	
	if($('.accordion-head.active').length) {
		$('.accordion-head.active').next('.accordion-body').slideDown(0);
	}
	
	if (typeof WOW == 'function') {
		wow = new WOW({
            mobile:       false
        })
        wow.init();
	}
	
	if(on_index) {
		$('body').addClass('homepage');
	} else {
		$('body').addClass('inner-page');
	}

	function isIE() {
		if ( (/MSIE 10/i.test(navigator.userAgent)) || (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) || (/Edge\/12./i.test(navigator.userAgent)) ) {
		   return true;
		} else {
			return false;
		}
	}
	
	function fitImages(element) {
		$(element).each(function() {
		//set size
			var th = $(this).height(),//box height
				tw = $(this).width(),//box width
				im = $(this).children('img'),//image
				ih = im.height(),//inital image height
				iw = im.width();//initial image width
				
			if ((th/tw) > (ih/iw)){
				im.addClass('wh').removeClass('ww');//set height 100%
			} else {
				im.addClass('ww').removeClass('wh');//set width 100%
			}
		   
			//set offset
			var nh = im.height(),//new image height
				nw = im.width(),//new image width
				hd = (nh-th)/2,//half dif img/box height
				wd = (nw-tw)/2;//half dif img/box width
				if (hd < 1) {hd = 0;}
				if (wd < 1) {wd = 0;}
			im.css({marginLeft: '-'+wd+'px', marginTop: '-'+hd+'px'});//offset left
		
		});
	}
		
	if ( isIE() ) {
		$('body').addClass('ie-browser');
	}
	
	if ( !(isIE()) ) {
		$('#sections').imagesLoaded( function() {
			fitImages('.bg-img');
		});
	
	}
	
	$('.down').each(function() {
		$(this).click(function() {
			var downParent = $(this).closest('.fixed-bg'),
			downNext = downParent.next();
			$('html, body').animate({ scrollTop: $(downNext).offset().top }, 700);
			return false;
		});
	});
	
	$('#collapse-button').click(function () {
        $('#collapse-menu').slideToggle(300);
		$('#collapse-button').toggleClass('active');
    });
	
	if ($.fn.basictable) {
		$('.basic-table').basictable({
			forceResponsive: false
		});
		$('.basic-table2').basictable({
			breakpoint: 1050
		});
	}
	
	$('.cases-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		navText: false,
		dots: false,
		items: 1,
		smartSpeed:1000
	});
	
	
	function equalHeight(elementToCheck) {
        var highestBox = 0;
		$(elementToCheck).css('height', 'auto');
        $(elementToCheck).each(function () {
			console.log('height: ' + $(this).height() + ', outerheight: ' + $(this).outerHeight() );
            if ($(this).outerHeight() > highestBox) {
                highestBox = $(this).outerHeight();
            }
        });
        $(elementToCheck).css('height', highestBox + 'px');
    }
	
	equalHeight('.conditions-list li');
	equalHeight('.process-list li .table');
	equalHeight('.adv-header');
	equalHeight('.tier-complex-item h3');
	equalHeight('.tier-complex-text');
	equalHeight('.cases-carousel-text');
	equalHeight('.participant-info');
	equalHeight('.opportunity-height');
	
	$(window).resize(function() {
		if ( !(isIE()) ) {
			fitImages('.bg-img');
		}
		if ( $('body').width() > 1159) {
			if ( $('#collapse-menu').is(':hidden') ) {
				$('#collapse-menu').removeAttr('style');
			}
		}
		
		equalHeight('.conditions-list li');
		equalHeight('.process-list li .table');
		equalHeight('.adv-header');
		equalHeight('.tier-complex-item h3');
		equalHeight('.tier-complex-text');
		equalHeight('.cases-carousel-text');
		equalHeight('.participant-info');
		equalHeight('.opportunity-height');
	});
	
	$(window).load(function() {
		
		equalHeight('.conditions-list li');
		equalHeight('.process-list li .table');
		equalHeight('.adv-header');
		equalHeight('.tier-complex-item h3');
		equalHeight('.tier-complex-text');
		equalHeight('.cases-carousel-text');
		equalHeight('.participant-info');
		equalHeight('.opportunity-height');
	});
	
});
//# sourceMappingURL=../maps/functions.js.map
