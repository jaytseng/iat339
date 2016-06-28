/*
	Here we are going to start working with javascript and jQuery/Zepto (similar to jQuery, but more compact), libraries that makes working with javascript easier by moving us away from browser-specific (js) concerns.

	Zepto/jQuery is (by default) mapped to the $ symbol, so to call on it we would need to start our statement with $ like the following: $("selector").method();
	selector = what is the script selecting? (like in CSS)
	method = what is the script doing with the selected item?

	To start off with, we want to tell Zepto/jQuery to run only once the entire page (the DOM) has loaded. Otherwise Zepto/jQuery may not see all the items of the DOM, and will not be able to interact with them accordingly.

	For example the message below reads as follows:
	$ = Zepto/jQuery selector (aka. use Zepto/jQuery for this)
	$(document) = Zepto/jQuery, go and select the document
	$(document).ready() = Zepto/jQuery, check when the document is ready (has loaded)
		using the .ready method

	$(document).ready( function() { // something }) = Zepto/jQuery, when the document is ready, run this function

	Remember that EVERY COMPLETE STATEMENT in javascript must end with a semicolon.
*/
$(document).ready(function () {


	/* 
		Here is some good javascript code for debugging, takes whatever info you want and makes it appear in the developer tool's console
	*/
	var variable = "Debugging test";
	console.log("Info: " + variable);



	/*
		Here we are using jQuery/Zepto to check the width of the page, with which we then cast into the 'width' variable
	*/
	var width = $(window).width();
	/*
		If the 'width' variable (width of the window) is less then 352px (22em), then we want to perform some actions
	*/
	if (width < 560) {
		variable = "less than 560px";
		console.log("Report" + variable);
		// $(".nav-toggle").removeClass("hidden");
		// $(".nav-toggle").addClass("shown"); // Adding a class to show our toggle

		$(".filterCont").hide();		// Setting nav to hide using jQuery/Zepto's method

		$(".filterTrigger").click(function () {
			// The .slideToggle method slides the 'nav' open/closed over 500ms
			$(".filterCont").slideToggle(100);

			variable = "Triggered";
			console.log("Report" + variable);
		});
	}

	if(width > 560){
		$(".filterCont").show();
	}




});