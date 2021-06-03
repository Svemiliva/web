/*
Access/Update Text Node
Create an unordered list containing <li> items that represent navigation.

Create a function that takes text from one of the <li> elements and presents it on screen using alert.
  
Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list and replace its text with text passed as the function argument.

*/
function takeText() {
    var li = document.querySelectorAll("li")[0].innerHTML
    console.log(li);
    alert(li);   
}
takeText();

function oneMore(text) {
    var last = document.querySelector("ul")
    var li= last.children[last.children.length-1]
    console.log(li);
    li.innerHTML=text;
}
oneMore("cao");
