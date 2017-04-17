$(document).ready(function () {
    //override jquery validate plugin defaults
    // http://stackoverflow.com/a/18754780

    $.validator.setDefaults({
        highlight: function(element) {
            $(element).closest(".label-text").addClass("has-error");
        },

        unhighlight: function(element) {
            $(element).closest(".label-text").removeClass("has-error");
        },

        errorElement: "span",

        errorClass: "help-block",

        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });

    $("form").validate({
        rules: {
            passwordConfirm: {
                required: true,
                equalTo: "#password"
            }
        },

        messages: {
            passwordConfirm: {
                equalTo: "Passwords do not match."
            }
        }
    });
});