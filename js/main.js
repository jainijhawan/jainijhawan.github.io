;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '85%' } );
	};



	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var pieChart = function() {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 4,
			lineCap: 'butt',
			barColor: '#FF9000',
			trackColor:	"#f5f5f5",
			size: 160,
			animate: 1000
		});
	};

	var skillsWayPoint = function() {
		if ($('#fh5co-skills').length > 0 ) {
			$('#fh5co-skills').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( pieChart , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}

	};

	// 3D hover + subtle cursor-follow for app tiles
	var initWorkTiles3D = function() {
		// Only run on devices with fine pointer (avoid mobile/tablet weirdness)
		var hasFinePointer = window.matchMedia &&
			window.matchMedia('(hover: hover) and (pointer: fine)').matches;
		if (!hasFinePointer) return;

		// App tiles + resume button share the same 3D effect
		var $tiles = $('#fh5co-work .work, .glowing-button');
		if (!$tiles.length) return;

		$tiles.each(function () {
			var el = this;
			var $el = $(this);
			var isButton = $el.hasClass('glowing-button');
			var $wrapper = $el.closest('.col-padding');
			var rafId = null;
			var currentTransform = '';

			function applyTransform(e) {
				var rect = el.getBoundingClientRect();
				var centerX = rect.left + rect.width / 2;
				var centerY = rect.top + rect.height / 2;
				var relX = (e.clientX - centerX) / rect.width;   // -0.5 .. 0.5
				var relY = (e.clientY - centerY) / rect.height;  // -0.5 .. 0.5

				// Bigger + more animated (still capped so it doesn't feel nauseating)
				var maxTilt = 20;
				var rotateY = relX * maxTilt * 2;    // left/right
				var rotateX = -relY * maxTilt * 2;   // up/down
				var rotateZ = relX * 2;              // tiny twist

				// Tiny parallax translation so it feels like it follows the cursor
				var maxShift = 18;
				var translateX = relX * maxShift * 2;
				var translateY = relY * maxShift * 2;

				// Pop-out scale
				var scale = 1.10;

				// Cursor position for the highlight sheen
				var mx = (e.clientX - rect.left) / rect.width;
				var my = (e.clientY - rect.top) / rect.height;
				el.style.setProperty('--mx', Math.max(0, Math.min(1, mx)).toFixed(4));
				el.style.setProperty('--my', Math.max(0, Math.min(1, my)).toFixed(4));

				var base = isButton ? 'perspective(900px) ' : '';
				var transform =
					base +
					'translate3d(' + translateX.toFixed(2) + 'px,' + translateY.toFixed(2) + 'px, 45px) ' +
					'rotateX(' + rotateX.toFixed(2) + 'deg) ' +
					'rotateY(' + rotateY.toFixed(2) + 'deg) ' +
					'rotateZ(' + rotateZ.toFixed(2) + 'deg) ' +
					'scale(' + scale.toFixed(3) + ')';

				if (transform === currentTransform) return;
				currentTransform = transform;
				el.style.transform = transform;
			}

			function onMouseMove(e) {
				if (rafId) cancelAnimationFrame(rafId);
				rafId = requestAnimationFrame(function () {
					applyTransform(e);
				});
			}

			function onMouseEnter(e) {
				$el.addClass('is-tilting');
				if ($wrapper.length) {
					$wrapper.addClass('is-tilting-wrapper');
				}
				onMouseMove(e);
			}

			function onMouseLeave() {
				$el.removeClass('is-tilting');
				if ($wrapper.length) {
					$wrapper.removeClass('is-tilting-wrapper');
				}
				if (rafId) cancelAnimationFrame(rafId);
				rafId = null;
				currentTransform = '';
				el.style.transform = 'translate3d(0, 0, 0)';
				el.style.removeProperty('--mx');
				el.style.removeProperty('--my');
			}

			el.addEventListener('mousemove', onMouseMove);
			el.addEventListener('mouseenter', onMouseEnter);
			el.addEventListener('mouseleave', onMouseLeave);
		});
	};

	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	
	$(function(){
		contentWayPoint();
		goToTop();
		loaderPage();
		fullHeight();
		parallax();
		// pieChart();
		skillsWayPoint();
		initWorkTiles3D();
	});


}());