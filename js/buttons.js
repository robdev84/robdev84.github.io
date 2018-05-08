$(document).ready(function() {   
    $("button").click(
        function() {
            var fileName = "../json/" + $(this).attr("title") + ".json"; //../ takes you out of the folder
            $.getJSON(fileName, function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("main").text("");
                        $("main").append(
                            "<h1>" + value.dates + "</h1>" +
                            "<h2>" + value.street + "</h2>" +
                            // "<h2>" + value.month + "<br>" + value.speaker + "</h2>" +
                            // "<p>" + value.text + "</p>"
                        );
                    });
                });
            });
        });
    });