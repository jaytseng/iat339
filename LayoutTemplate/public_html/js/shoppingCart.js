$(document).ready(function () {
    var variable = "Shopping Cart Remove";
    console.log("Info: " + variable);

    $("#rem1FromCart").click(function (e) {
        e.preventDefault();
        $("#cartItem1").slideToggle(100);
    })

    $("#rem2FromCart").click(function (e) {
        e.preventDefault();
        $("#cartItem2").slideToggle(100);
    })

    $("#rem3FromCart").click(function (e) {
        e.preventDefault();
        $("#cartItem3").slideToggle(100);
    })
});