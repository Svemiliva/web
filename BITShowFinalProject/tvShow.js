function getShowDetails() {
    var $main = $("main");
    var $showDetails = $("#showDetails");

    var showName = localStorage.getItem("1", name);
    $("#newShowTitle").text(showName);
    localStorage.removeItem("1");

    var showId = localStorage.getItem("2", showId);
    localStorage.removeItem("2");

    var request4 = new XMLHttpRequest();
    var request5 = new XMLHttpRequest();
    var request6 = new XMLHttpRequest();

    var endpoint4 = "http://api.tvmaze.com/shows/" + showId;
    var endpoint5 = "http://api.tvmaze.com/shows/" + showId + "/seasons";
    var endpoint6 = "http://api.tvmaze.com/shows/" + showId + "/cast";

    request4.open("GET", endpoint4);
    request5.open("GET", endpoint5);
    request6.open("GET", endpoint6);

    request4.onload = function () {
        if (request4.status >= 200 && request4.status < 300) {

            var response4 = JSON.parse(request4.responseText);

            var image = response4.image.original;
            var description = response4.summary;

            var $img = $("<img>");
            $img.attr("src", image);
            $main.append($img);

            $(description).insertAfter($showDetails);
        }
    };

    request5.onload = function () {
        if (request5.status >= 200 && request5.status < 300) {

            var response5 = JSON.parse(request5.responseText);
            var numberOfSeasons = response5.length;

            var $ul = $("<ul class='seasons'>");
            $ul.text("Seasons(" + numberOfSeasons + ")");
            $("img")[0].after($ul[0]);

            for (var i = numberOfSeasons - 1; i >= 0; i--) {
                var seasonStart = response5[i].premiereDate;
                var seasonEnd = response5[i].endDate;

                var $li = $("<li>");
                $li.text(seasonStart + " - " + seasonEnd);
                $("ul").append($li);
            }
        }
    };

    request6.onload = function () {
        if (request6.status >= 200 && request6.status < 300) {

            var response6 = JSON.parse(request6.responseText);

            var $ul = $("<ul class='cast'>");
            $ul.text("Cast");
            $("ul").append($ul[0]);

            for (var j = 0; j < response6.length; j++) {
                var actorName = response6[j].person.name;

                var $li = $("<li>");
                $li.text(actorName);
                $("ul").last().append($li);
            }
        }
    };
    request4.send();
    request5.send();
    request6.send();
}
setTimeout(getShowDetails, 500);

