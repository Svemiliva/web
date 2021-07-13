var input = $("#inputField");
var gallery = $(".gallery");

function showTop50() {

    var showTop50Request = new XMLHttpRequest;

    var showTop50Endpoint = "http://api.tvmaze.com/shows";

    showTop50Request.open("GET", showTop50Endpoint);

    showTop50Request.onload = function () {
        if (showTop50Request.status >= 200 && showTop50Request.status < 300) {
            var response = JSON.parse(showTop50Request.responseText);

            response.sort(function (a, b) {                     //this sorts response by rating descending 
                return b.rating.average - a.rating.average;
            });


            for (let i = 0; i < 50; i++) {
                var name = response[i].name;
                var image = response[i].image.medium;
                var showId = response[i].id;

                var $div = $("<div class='show col-4 p-3'>");
                gallery.append($div);

                var $img = $("<img>");
                $img.attr("src", image);
                $img.attr("class", showId);
                $img.attr("alt", name);
                $div.append($img);

                var $a = $("<a>");
                $a.addClass("userLink");
                $a.attr("href", "./tvShow.html");
                $a.attr("target", "_blank");
                $a.attr("id", showId);
                $a.text(name);

                $div.append($a);
            }

            $("a").click(function () {
                var showName = $(this).text();
                var showId = $(this).attr("id");

                localStorage.setItem("1", showName);
                localStorage.setItem("2", showId);
            })

            $("img").click(function () {
                var showName = $(this).attr("alt");
                var showId = $(this).attr("class");

                localStorage.setItem("1", showName);
                localStorage.setItem("2", showId);
                window.location.replace("tvShow.html");
            })
        }
    }
    showTop50Request.send();
}
showTop50();

