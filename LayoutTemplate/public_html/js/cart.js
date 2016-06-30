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
    var variable = "Cart Test Started";
    console.log("Info: " + variable);

    var width = $(window).width();
    if (width < 1360) {
        $(".cart").hide();

        $("#navCartBtn").click(function (e) {
            e.preventDefault();
            $(".cart").slideToggle(100);
            variable = "clicked";
            console.log("Info: " + variable);
        });
    }

    $("#navCartBtn").click(function (e) {
        e.preventDefault();
    });





	/*
		Here we are using jQuery/Zepto to check the width of the page, with which we then cast into the 'width' variable
	*/
    $("#item-1").hide();		// Setting nav to hide using jQuery/Zepto's method
    var btn1State = false;
    $("#item1btn").click(function () {

        if (width < 1360) {
            $(".cart").slideToggle(100);
            // variable = "cart open";
            // console.log("Info: " + variable);

            setTimeout(function () {
                $("#item-1").slideToggle(100);
                // variable = "item1btn active";
                // console.log("Info: " + variable);
                if (btn1State == false) {
                    $("#item1btn").html("<a>Remove from Cart</a>");
                    btn1State = true;
                } else {
                    $("#item1btn").html("<a>Add to Cart</a>");
                    btn1State = false;
                }
            }, 200);

            setTimeout(function () {
                $(".cart").slideToggle(100);
            }, 1000);

            // variable = "cart closed";
            // console.log("Info: " + variable);
        } else {
            $("#item-1").slideToggle(100);
            if (btn1State == false) {
                $("#item1btn").html("<a>Remove from Cart</a>");
                btn1State = true;
            } else {
                $("#item1btn").html("<a>Add to Cart</a>");
                btn1State = false;
            }
        }


        // variable = "Item 1 Triggered";
        // console.log("Report" + variable);
    });





    $("#item-2").hide();		// Setting nav to hide using jQuery/Zepto's method
    var btn2State = false;
    $("#item2btn").click(function () {


        if (width < 1360) {
            $(".cart").slideToggle(100);
            // variable = "cart open";
            // console.log("Info: " + variable);

            setTimeout(function () {
                $("#item-2").slideToggle(100);
                // variable = "item1btn active";
                // console.log("Info: " + variable);
                if (btn2State == false) {
                    $("#item2btn").html("<a>Remove from Cart</a>");
                    btn2State = true;
                } else {
                    $("#item2btn").html("<a>Add to Cart</a>");
                    btn2State = false;
                }

            }, 200);

            setTimeout(function () {
                $(".cart").slideToggle(100);
            }, 1000);

            // variable = "cart closed";
            // console.log("Info: " + variable);
        } else {
            $("#item-2").slideToggle(100);
            if (btn2State == false) {
                $("#item2btn").html("<a>Remove from Cart</a>");
                btn2State = true;
            } else {
                $("#item2btn").html("<a>Add to Cart</a>");
                btn2State = false;
            }
        }


    });

    var btn3State = false;

    $("#item-3").hide();		// Setting nav to hide using jQuery/Zepto's method

    $("#item3btn").click(function () {
        if (width < 1360) {
            $(".cart").slideToggle(100);
            // variable = "cart open";
            // console.log("Info: " + variable);

            setTimeout(function () {
                $("#item-3").slideToggle(100);
                // variable = "item1btn active";
                // console.log("Info: " + variable);
                if (btn3State == false) {
                    $("#item3btn").html("<a>Remove from Cart</a>");
                    btn3State = true;
                } else {
                    $("#item3btn").html("<a>Add to Cart</a>");
                    btn3State = false;
                }
            }, 200);

            setTimeout(function () {
                $(".cart").slideToggle(100);
            }, 1000);

            // variable = "cart closed";
            // console.log("Info: " + variable);
        } else {
            $("#item-3").slideToggle(100);
            if (btn3State == false) {
                $("#item3btn").html("<a>Remove from Cart</a>");
                btn3State = true;
            } else {
                $("#item3btn").html("<a>Add to Cart</a>");
                btn3State = false;
            }
        }
    });

    $("#remItem1").click(function () {
        // The .slideToggle method slides the 'nav' open/closed over 500ms
        $("#item-1").hide();
        if (btn1State == true) {
            $("#item1btn").html("<a>Add to Cart</a>");
            btn1State = false;
        }
        variable = "Item 1 Closed";
        console.log("Report " + variable);
    });

    $("#remItem2").click(function () {
        // The .slideToggle method slides the 'nav' open/closed over 500ms
        $("#item-2").hide();
        if (btn2State == true) {
            $("#item2btn").html("<a>Add to Cart</a>");
            btn2State = false;
        }
        variable = "Hidden";
        console.log("Report" + variable);
    });

    $("#remItem3").click(function () {
        // The .slideToggle method slides the 'nav' open/closed over 500ms
        $("#item-3").hide();
        if (btn3State == true) {
            $("#item3btn").html("<a>Add to Cart</a>");
            btn3State = false;
        }
        variable = "Hidden";
        console.log("Report" + variable);
    });

});
