/* 
Create two unordered lists.
Each list should be wrapped in a div element.
One &lt;li&gt; element in the second list should have a class “active”, which sets its
background color.
Create a function that selects the &lt;li&gt; element with class “active”.
Remove the class from that element, and then select the first &lt;li&gt; element in the
first unordered list using node relations.
Apply class to that newly selected &lt;li&gt; element
*/

var liClass= document.querySelectorAll ("li")
console.log(liClass);

liClass[4].className= "active"

function selectLi() {
    var activeLi= document.querySelectorAll ("li");
    activeLi[4].classList.remove("active");
    var newLi= activeLi[4].parentElement.parentElement.previousElementSibling.firstElementChild.children[0]
    newLi.className= "first"
    console.log(newLi);
}
selectLi();