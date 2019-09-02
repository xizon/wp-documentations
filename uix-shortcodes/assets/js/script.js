
( function( $ ) {
"use strict";
 
    $( function() {

		/*
		 * Menu
		*/
		$( '.bs-docs-sidenav > li' ).each( function() {
			if ( $( this ).find( 'ul' ).length > 0 ) {
				if ( $( this ).find( '.sidr-nav-arrow' ).length < 1 ) $( this ).prepend( '<em class="sidr-nav-arrow"></em>' );
			}
		} );

		/*
		 * Scroll bar
		*/
		if ( $( window ).width() > 768 ) {
		    $( '.bs-docs-sidenav' ).css( 'height', $( window ).height() - $( '.bs-docs-footer' ).height() + 'px' );
		}
		$( window ).on('resize', function() {
			if ( $( window ).width() <= 768 ) {
				$( '.bs-docs-sidenav' ).css( 'height', 'auto' );
			}

		});
		
		
		/*
		 * Tab
		*/
		$( '.tabs' ).accTabs();
	
		/*
		 * To Top
		*/
		$( document ).on( 'click', '.to-top', function() {
				$('html, body').animate({
					scrollTop: 0
				}, 250);
		});
	
		$( window ).on( 'scroll', function() {
				if ($(this).scrollTop() > 300) {
					$('.to-top').addClass('visible');
				} else {
					$('.to-top').removeClass('visible');
				}
		});
			
		/*
		 * Smooth Scrolling
		*/	
		  $( 'a[href*=#]:not([href=#])' ).on( 'click', function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top
				}, 250);
				return false;
			  }
			}
		  });
	 
			 

	} );
    
} ) ( jQuery );
