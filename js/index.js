function changeSubscription() {
    var subHeader = document.getElementById("subscription-head");
    subHeader.innerHTML = "Thanks for subscribing!";

    var subBody = document.getElementById("subscription-body");
    subBody.innerHTML = "Since this is a demo site, you won't actually receive monthly mail but your commitment is appreciated.";

    var box = document.getElementById("subscription-box");
    box.style.display = "None";

    var button = document.getElementById("subscription-button");
    button.style.display = "None";
}