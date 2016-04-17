/*jslint browser: true*/


// Attach FastClick

$(function() {
    FastClick.attach(document.body);
});


// Hide filters on page load

$(document).ready(function() {
	$('.filters').hide();
});


// Hide description at small size

/*
$(window).resize(function() {

  if ($(this).width() < 610) {

    $('.desc_div').hide();

  } else {

    $('.desc_div').show();

    }

});
*/


// Weekend select drop down menu (from: http://www.webchief.co.uk/blog/simple-jquery-dropdown-menu/)



	$(document).ready(function() {
		
		// Define the open and close submenu functions
	
				function openSubMenu() {
				$(this).find('ul').css('visibility', 'visible');	
			}
			
			function closeSubMenu() {
				$(this).find('ul').css('visibility', 'hidden');	
			}
	
		
		// when the mouse is moved over a li in myMenu, the function openSubMenu is called
			$('.myMenu > li').on('mouseover touchstart', openSubMenu);
		//  We need to bind another event listener to detect when the mouse rolls out and call a function that gets rid of the dropdown.
			$('.myMenu > li').on('mouseout', closeSubMenu);
		
		// When the mouse rolls over the list item, the function looks for an unordered list within it. If one is found, it sets the style property visibility to visible.
			function openSubMenu() {
				$(this).find('ul').css('visibility', 'visible');	
			}
			
			function closeSubMenu() {
				$(this).find('ul').css('visibility', 'hidden');	
			}
		});



	// Make so when you click on a list item, it toggles a div
	
	$(document).ready(function() {
		$('.date_select_div ul li ul li').click(function() {
		    var i = $(this).index();
		    $('.full_cube').hide();
		    $('#day' + (i+1)).show();
		    $('.myMenu > li').find('ul').css('visibility', 'hidden');
		    
		    // Shows filters when a day is clicked
		    $('.filters').show();
		});
	});



// Filter buttons

	// Count Basin filtering
	
	$(document).ready(function() {
    	$(".count_basin_button").click(function() {
	    	
	    	// When non-active Basin button is clicked on, remove the non-Basin cubes
			if ($(".count_basin_button").hasClass("basin_button_active") === false) {
				$(".cube_column").children("div").show();
				$(".cube_column").children("div").not(".band_box_basin_pick").fadeToggle(200);}
				
	    	// When active Basin button is clicked on, show the non-Basin cubes
			if ($(".count_basin_button").hasClass("basin_button_active") === true) {
				$(".cube_column").children("div").not(".band_box_basin_pick").fadeIn(200);}

			// Turn off other buttons when this button clicked on					
        	$(this).toggleClass("basin_button_active");
			if ($(".performer_pick_button").hasClass("performer_pick_button_active") === true) {
				$(".performer_pick_button").removeClass("performer_pick_button_active");}
		});
	});
	
// Show/hide more info box



	// Hides links on page load
	$(document).ready(function() {
    	$("#more_box_add").hide();
	});
	

	

	
	$(document).ready(function() {
		$("#more_box").click(function() {
			$("#more_box_add").fadeToggle(200);
		});
	});
	
	
// Show/hide more .text2 box



	// Hides .text2 on page load
	$(document).ready(function() {
    	$(".text2").hide();
	});
	

	

	
	$(document).ready(function() {
		$(".band_box_basin_pick").click(function() {
			$(".text2").fadeToggle(200);
		});
	});
			
				


	
	
	// Performer Pick filtering
	
	
	$(document).ready(function() {
    	$(".performer_pick_button").click(function() {
	    	
	    	// When non-active Performer Pick button is clicked on, remove the non-PPick cubes
			if ($(".performer_pick_button").hasClass("performer_pick_button_active") === false) {
				$(".cube_column").children("div").show();
				$(".cube_column").children("div").not(".band_box_performer_pick").fadeToggle(200);}
				
	    	// When active Basin button is clicked on, show the non-Basin cubes
			if ($(".performer_pick_button").hasClass("performer_pick_button_active") === true) {
				$(".cube_column").children("div").not(".band_box_performer_pick").fadeIn(200);}

			// Turn off other buttons when this button clicked on					
        	$(this).toggleClass("performer_pick_button_active");
			if ($(".count_basin_button").hasClass("basin_button_active") === true) {
				$(".count_basin_button").removeClass("basin_button_active");}
		});
	});


		 


// Sticky navigation
/*

	// 	Store the nav section as a variable, since we're calling it a lot
	var nav = $("section.navigation");
	
	// 	 On scroll, target browser window and pass function
	$(window).scroll(function() {
		// 	this = window; scrollTop gets current vertical position of scroll bar; # is how many pixels are scrolled	
		if ( $(this).scrollTop() > 200 ) {
			// 	add scrolled class		
			nav.addClass("navigation_scrolled");
		}
		else {
			nav.removeClass("navigation_scrolled");
		}
	});
*/