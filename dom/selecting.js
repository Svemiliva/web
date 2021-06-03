/*var ulNode= document.querySelector("ul").nextElementSibling;
console.log(ulNode);


ulNode.className= "second";


var allLi= document.querySelectorAll("li");
//console.log(allLi);

//var li= allLi.children;
//console.log(li);

allLi.forEach((li) => {
    li.style.background= "lightgray"
});

var newUl= document.createElement ("ul");
console.log(newUl);
newUl.innerHTML= " <li>first</li><li>second</li><li>third</li> ";
document.body.appendChild(newUl);

newUl.className= "third";
var newLi = newUl.querySelectorAll ("li")

newLi 


Create a second function that, when triggered, selects all &lt;li&gt; elements on the
page.
The function also sets a class that sets some bg color to every &lt;li&gt; element.
*/
function selectLi() {
    var li= document.querySelectorAll ("li")
    console.log(li);
    li.forEach(function (element) {
        element.className= "first"
    })
}
selectLi();

function selThird() {
    var ul = document.querySelectorAll ("ul");
    var ul3 = ul[ul.length-1];
  console.log(ul3);
    var li= ul3.children;
console.log(li);
for (var i = 0; i < li.length; i++) {
    li[i].className= "second"
    
}
}  
selThird();