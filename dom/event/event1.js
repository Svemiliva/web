var imgNode = document.getElementsByTagName('img');

function handlerAddBorder(img) {
    if (img.width == 300) {
        img.classList.toggle("redborder");
    }
}

for (var i = 0; i < imgNode.length; i++) {
    // iterates through all the images and assigns an 'onclick' event-handler
    imgNode[i].onclick = function () {
        handlerAddBorder(this); // passes the current image into the handlerAddBorder() function when clicked
    
    
    };
}
