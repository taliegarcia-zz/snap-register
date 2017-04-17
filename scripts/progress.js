$(document).ready(function () {
    $("#signup-form input").keyup(function() {

        var numComplete = 0;
        $("#signup-form input[required]").each(function() {
            if (this.validity.valid) {
                numComplete++;
            }
        });

        var progressBar = $("#progress-bar");
        var progressTitle = $("#progress-title");
        var progressMessage = $("#progress-message");

        if (numComplete == 0) {
            progressBar.attr("aria-valuenow", "0");
            progressBar.css("width", 0 + "%");
            progressTitle.text("Let's get started.");
            progressMessage.text("Enter your information below.");
        }
        if (numComplete == 1) {
            progressBar.attr("aria-valuenow", "25");
            progressBar.css("width", 25 + "%");
            progressTitle.text("Great start!");
            progressMessage.text("There you go, good progress.");
        }
        if (numComplete == 2) {
            progressBar.attr("aria-valuenow", "50");
            progressBar.css("width", 50 + "%");
            progressTitle.text("Great start!");
            progressMessage.text("There you go, good progress.");
        }
        if (numComplete == 3) {
            progressBar.attr("aria-valuenow", "75");
            progressBar.css("width", 75 + "%");
            progressTitle.text("Almost There!");
            progressMessage.text("Keep pushing. A few fields left!");
        }
        if (numComplete == 4) {
            progressBar.attr("aria-valuenow", "85");
            progressBar.css("width", 85 + "%");
            progressTitle.text("Almost There!");
            progressMessage.text("Just one more left...");
        }
        if (numComplete == 5) {
            progressBar.attr("aria-valuenow", "100");
            progressBar.css("width", 100 + "%");
            progressTitle.text("All done!");
            progressMessage.text("Go ahead and press the big green button.");
        }
    });
});
