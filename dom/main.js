var allDiv = document.querySelectorAll("div");
var firstDiv = allDiv[0];
var lastDiv = allDiv[allDiv.length - 1];

function createSelect(array, node) {
  var select = "";
  select += "<select name='' id=''>";
  select += "<option value=''>choose option</option>";
  array.forEach(function (element, index) {
    select += "<option value='" + index + "'>" + element + "</option>";
  });
  select += "</select>";
  node.innerHTML= select

}
createSelect(["mail", "contact", "number"], lastDiv);
createSelect(["bla", "nesto", "drugo"], firstDiv);


