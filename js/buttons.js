$(document).ready(function() {   
    $("button").click(
        function() {
            var fileName = "https://robdev84.github.io/json/" + $(this).attr("title") + ".json"; //../ takes you out of the folder
            $.getJSON(fileName, function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#main").text("");
                        $("#main").append(
                            "<h2>" + value.dates + "</h2>" +
                            "<h2>" + value.street + "</h2>" +
                            "<h2>" + value.range + "</h2>"
                        );
                    });
                });
            });
        });
    });