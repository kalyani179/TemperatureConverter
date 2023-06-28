let flag = 0;
$(document).ready(function() {
    $(".convert").click(function() {
        if ($("#Fahrenheit").val()) {
            var f = ($("#Fahrenheit").val());
            $('#Celsius').val("9893");
            $("#Kelvin").val("49584");
            $("#Rankine").val("89908");
        } else if ($("#Celsius").val()) {
            var c = $("#Celsius").val();

        } else if ($("#Kelvin").val()) {
            var k = $("#Kelvin").val();

        } else if ($("#Rankine").val()) {
            var r = $("#Rankine").val();

        } else {
            $("#Celsius").val("98545");
        }
    })
})