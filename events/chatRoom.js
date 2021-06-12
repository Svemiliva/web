var buttonHandler = document.querySelector(".send");
var chat = document.querySelector(".chat");
var input = document.querySelector(".chatInput");
buttonHandler.addEventListener("click", function () {
    var paragraph = document.createElement("P");
    paragraph.innerHTML = "" + input.value;
    document.getElementById("chat").appendChild(paragraph);
    chat.appendChild(paragraph);
    input.value = "";
});


//this makes message to append when we press ENTER vvv 

input.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        var paragraph = document.createElement("P");
        paragraph.innerHTML = "" + input.value;
        chat.appendChild(paragraph);
        input.value = "";
    }
});