/*
Attributes
Create a form that contains multiple input elements with labels.
Some of those elements should be required.
Create a function that validates the form.
The function checks each input element that belongs to the form.
If the element has the required attribute and no data, it should get red borders.*/


function validateForm () {
    var input = document.querySelectorAll("input");
    for (var i = 0; i < input.length; i++) {
        if (input[i].required && input[i].value === "") {
            input[i].className = "redborder";
        }
    }
};

validateForm();
