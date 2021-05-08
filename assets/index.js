$(document).ready(() => {
    let sendPRayer = () => {
        console.log("clicked");
        window.open("mailto:test@example.com?subject=subject&body=body");
    };
    $("#pray").click(sendPRayer);
});
//api key for scriptures 7cac7d6687cb35761206c7bd0db2c010
