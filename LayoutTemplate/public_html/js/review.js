$(document).ready(function () {

    var variable = "Slider Test Started";
    console.log("Info: " + variable);

    $(".review-output-container").hide();
    $(".reviewActivator").click(function (e) {
        e.preventDefault();
        variable = "Slider Triggered";
        console.log("Info: " + variable);
        $(".review-output-container").slideToggle(100);
    });
});