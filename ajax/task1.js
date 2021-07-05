var newDog = new XMLHttpRequest();

//Good practice is to use $ before NODE names
var $button = document.querySelector("#addPictureButton");
var $imgGallery = document.querySelector(".gallery");



function getDogImage() {

    newDog.open("GET", "https://dog.ceo/api/breeds/image/random");

    newDog.onload = function () {
        if (newDog.status >= 200 && newDog.status < 300) {
            var response = JSON.parse(newDog.responseText); //we had to parse this so we could access message > without JSON.parse it returns string
            var dogImg = response.message;  //Good practice is to give meaningfull names like dogImg so the code is easier to read 

            $imgGallery.innerHTML = "";

            var $img = document.createElement("img");
            $img.setAttribute("src", dogImg);
            $imgGallery.appendChild($img);
        }
    }

    newDog.send();
}

$button.addEventListener("click", getDogImage);