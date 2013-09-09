// JavaScript Document
// author : Chris Allison
// created : 3/31/13
// version : 1.0

$(document).ready(function() {
    
	//=== Center piece slide effect ===//
	
	//== custom variables ==//
	var spcl_1 = $('#spcl1');
	var spcl_2 = $('#spcl2');
	
	var slide_1 = $('.cp2');
	var slide_2 = $('.cp3');
	
	var def_x = '-'+955+'px';
	var zero = 0+'px';
	
	//== slide 1 effect ==//
	$(spcl_1).click(function(){
		if( $(slide_1).css('right') == def_x || $(slide_2).css('right') == zero)
		{
			$('.close').fadeOut(100);			
			$(slide_1).animate({'right' : 0}, 1000);
			$(slide_2).animate({'right' : def_x}, 1000);
			$('.close').delay(1100).fadeIn(500);			
		}
	})
	//== slide 2 effect ==//
	$(spcl_2).click(function(){
		if( $(slide_2).css('right') == def_x || $(slide_1).css('right') == zero)
		{
			$('.close').fadeOut(100);			
			$(slide_2).animate({'right' : 0}, 1000);
			$(slide_1).animate({'right' : def_x}, 1000);
			$('.close').delay(1100).fadeIn(500);					
		}
	})
	//== close slide effect ==//	
	$('.close').click(function(){
		if( $(slide_1).css('right')	== zero)
		{
			$(this).fadeOut(100);
			$(slide_1).animate({'right' : def_x}, 1000);
			
		}else if( $(slide_2).css('right') == zero )
		{
			$(this).fadeOut(100);
			$(slide_2).animate({'right' : def_x}, 1000);	
		}
	})
	
	//=== steps hover effect ===//
	$('#step1').on('mouseenter',function(){
			
			$(this).animate({'margin-top' : 245}, 500);
			$(this).siblings().animate({'margin-top' : 0}, 500);	
		}
	);
	$('#step2').on('mouseenter',function(){
			
			$(this).animate({'margin-top' : 245}, 500);
			$(this).siblings().animate({'margin-top' : 0}, 500);	
		}
	);
	$('#step3').on('mouseenter',function(){
			
			$(this).animate({'margin-top' : 245}, 500);
			$(this).siblings().animate({'margin-top' : 0}, 500);	
		}
	);
	$('.picaboo').on('mouseleave', function(){
		
		$(this).children('.lid').animate({'margin-top' : 0}, 500);
			
	})

	//=== contact form validation ===//
	$('#contact_form').validate({
		rules: {
			fname : 'required',
			lname : 'required',
			phone : {
				required : true,
				phoneUS : true	
			},
			zip : {
				required : true,
				digits : true
			}
		}
	});
	
	//=== area availability form validation ===//
	$('#area_form').validate({
		rules : {
			zip_code : {
				required : true,
				digits : true	
			}
		}
	})
		
}); //end document.ready