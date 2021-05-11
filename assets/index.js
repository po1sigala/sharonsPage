$(document).ready(() => {
    let sendPRayer = () => {
        console.log("clicked");
        window.open("mailto:test@example.com?subject=subject&body=body");
    };
    let goToPrayerLine = () => {
        console.log("cleared");
        let search;
        let apiKey = "7cac7d6687cb35761206c7bd0db2c010";
        $("#content").empty();

        let queryURL = "";
        $.ajax({
            url: " https://api.scripture.api.bible/v1/bibles",
            method: "GET",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("api-key", apiKey);
            },
        }).then(function (response) {
            console.log("response is");
            console.log(response);
        });
    };
    $("#pray").click(sendPRayer);
    $("#live").click(goToPrayerLine);
});
//api key for scriptures 7cac7d6687cb35761206c7bd0db2c010
