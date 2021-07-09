var input = $("#inputField");
var gallery = $(".gallery");

function showTop50() {

    var request = new XMLHttpRequest;

    var endpoint = "http://api.tvmaze.com/shows";

    request.open("GET", endpoint);

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            var response = JSON.parse(request.responseText);

            for (let i = 0; i < 50; i++) {
                var name = response[i].name;
                var image = response[i].image.medium;
                var showId = response[i].id;

                var $div = $("<div class='show'>");
                gallery.append($div);

                var $img = $("<img>");
                $img.attr("src", image);
                $div.append($img);

                var $a = $("<a>");
                $a.addClass("userLink");
                $a[0].setAttribute("href", "./tvShow.html");
                $a[0].setAttribute("target", "_blank");
                $a[0].setAttribute("id", showId);
                $div.append($a[0]);

                var $p = $("<p>");
                $p.text(name);
                $p.appendTo($a[0]);
            }

            $("a").click(function () {
                var showName = $(this).find("p").text();
                var showId = $(this).attr("id");

                localStorage.setItem("1", showName);
                localStorage.setItem("2", showId);
            })
        }
    }
    request.send();
}
showTop50();


function searchForShow() {

    var request2 = new XMLHttpRequest;
    var query = input.val();
    var endpoint2 = "http://api.tvmaze.com/search/shows?q=" + query;

    request2.open("GET", endpoint2);

    request2.onload = function () {
        if (request2.status >= 200 && request2.status < 300) {
            var response2 = JSON.parse(request2.responseText);

            $("#searchOptions").empty();    //this empties all the options from search list

            for (var j = 0; j < response2.length && j < 10; j++) {
                var searchResult = response2[j].show.name;

                var $optionNode = $("<option>");
                $optionNode.text(searchResult);

                $("#searchOptions").append($optionNode);
            }
        }
    }
    request2.send();
}
input.keypress(searchForShow);



input.keypress(function (e) {
    if (e.which == 13) {

        e.preventDefault();

        function showSearched() {

            var request3 = new XMLHttpRequest;

            var endpoint3 = "http://api.tvmaze.com/search/shows?q=" + input.val();

            request3.open("GET", endpoint3);

            gallery.empty();

            request3.onload = function () {
                if (request3.status >= 200 && request3.status < 300) {
                    var response3 = JSON.parse(request3.responseText);

                    for (let k = 0; k < response3.length; k++) {

                        var name3 = response3[k].show.name;
                        var image3 = response3[k].show.image.medium;
                        var showId3 = response3[k].show.id;

                        var $div3 = $("<div class='show'>");
                        gallery.append($div3);

                        var $img3 = $("<img>");
                        $img3.attr("src", image3);
                        $div3.append($img3);

                        var $a3 = $("<a>");
                        $a3.addClass("userLink");
                        $a3[0].setAttribute("href", "./tvShow.html");
                        $a3[0].setAttribute("target", "_blank");
                        $a3[0].setAttribute("id", showId3);
                        $div3.append($a3[0]);

                        var $p3 = $("<p>");
                        $p3.text(name3);
                        $p3.appendTo($a3[0]);
                    }

                    $("a").click(function () {
                        var showName = $(this).find("p").text();
                        var showId = $(this).attr("id");

                        localStorage.setItem("1", showName);
                        localStorage.setItem("2", showId);
                    })
                }
            }
            request3.send();
        }
        showSearched();
    }
});