var showName = localStorage.getItem("1");
$("#newShowTitle").text(showName);
localStorage.removeItem("1");

var showId = localStorage.getItem("2");
localStorage.removeItem("2");

var $getCrew = $("#getCrew");
var $getAkas = $("#getAkas");
var $getEpisodes = $("#getEpisodes");

function getShowDetails() {
    var $main = $("main");
    var $showDetails = $("#showDetails");

    var imageDescrRequest = new XMLHttpRequest();
    var seasonsRequest = new XMLHttpRequest();
    var castRequest = new XMLHttpRequest();

    var imageDescrEndpoint = "http://api.tvmaze.com/shows/" + showId;
    var seasonsEndpoint = "http://api.tvmaze.com/shows/" + showId + "/seasons";
    var castEndpoint = "http://api.tvmaze.com/shows/" + showId + "/cast";

    imageDescrRequest.open("GET", imageDescrEndpoint);
    seasonsRequest.open("GET", seasonsEndpoint);
    castRequest.open("GET", castEndpoint);

    imageDescrRequest.onload = function () {
        if (imageDescrRequest.status >= 200 && imageDescrRequest.status < 300) {

            var response4 = JSON.parse(imageDescrRequest.responseText);

            var image = response4.image.original;
            var description = response4.summary;

            var $img = $("<img>");
            $img.attr("src", image);
            $main.prepend($img);

            $(description).insertAfter($showDetails);
        }
    };

    seasonsRequest.onload = function () {
        if (seasonsRequest.status >= 200 && seasonsRequest.status < 300) {

            var response5 = JSON.parse(seasonsRequest.responseText);
            var numberOfSeasons = response5.length;
            $("#h3Seasons").html(`Seasons (${numberOfSeasons})`);

            var $ul = $("<ul class='seasons col12'>");

            $("#h3Seasons").after($ul);

            for (var i = numberOfSeasons - 1; i >= 0; i--) {
                var seasonStart = response5[i].premiereDate;
                var seasonEnd = response5[i].endDate;

                var $li = $("<li>");
                $li.text(seasonStart + " - " + seasonEnd);
                $(".seasons").append($li);
            }
        }
    };

    castRequest.onload = function () {
        if (castRequest.status >= 200 && castRequest.status < 300) {

            var response6 = JSON.parse(castRequest.responseText);

            var $ul = $("<ul class='cast col12'>");
            $("#h3Cast").after($ul);

            for (var j = 0; j < response6.length; j++) {
                var actorName = response6[j].person.name;

                var $li = $("<li>");
                $li.text(actorName);
                $(".cast").append($li);
            }
        }
    };

    imageDescrRequest.send();
    seasonsRequest.send();
    castRequest.send();
}
setTimeout(getShowDetails, 500);



function getCrew() {
    var request7 = new XMLHttpRequest();

    var endpoint7 = "http://api.tvmaze.com/shows/" + showId + "/crew";

    request7.open("GET", endpoint7);

    request7.onload = function () {
        if (request7.status >= 200 && request7.status < 300) {

            var response7 = JSON.parse(request7.responseText);

            var olDivCrew = $("<ol class='olCrew'>");

            $(".crew").append(olDivCrew);

            for (var k = 0; k < response7.length; k++) {
                var crewName = response7[k].person.name;

                var liCrew = $("<li>");
                liCrew.text(crewName);
                $(".olCrew").append(liCrew);
            }

            if ($(".olCrew").children().length < 1) {
                var liCrew = $("<li>");
                liCrew.text("There is no available information.");
                $(".olCrew").append(liCrew);
            }
        }
    };
    request7.send();

    $("#getCrew").html("Hide Crew");
    $getCrew.off("click");
    $getCrew.one("click", hideCrew);
}
$getCrew.one("click", getCrew);



function getAkas() {

    var request8 = new XMLHttpRequest();

    var endpoint8 = "http://api.tvmaze.com/shows/" + showId + "/akas";

    request8.open("GET", endpoint8);

    request8.onload = function () {
        if (request8.status >= 200 && request8.status < 300) {

            var response8 = JSON.parse(request8.responseText);

            var olDivAkas = $("<ol class='olAkas'>");

            $(".akas").append(olDivAkas);

            for (var l = 0; l < response8.length; l++) {
                var akasName = response8[l].name;

                var liAkas = $("<li>");
                liAkas.text(akasName);
                $(".olAkas").append(liAkas);
            }

            if ($(".olAkas").children().length < 1) {
                var liAkas = $("<li>");
                liAkas.text("There is no available information.");
                $(".olAkas").append(liAkas);
            }
        }
    };
    request8.send();

    $("#getAkas").html("Hide Akas");
    $getAkas.off("click");
    $getAkas.one("click", hideAkas);
}
$getAkas.one("click", getAkas);



function getEpisodes() {

    var request9 = new XMLHttpRequest();

    var endpoint9 = "http://api.tvmaze.com/shows/" + showId + "/episodes";

    request9.open("GET", endpoint9);

    request9.onload = function () {
        if (request9.status >= 200 && request9.status < 300) {

            var response9 = JSON.parse(request9.responseText);

            var olDivEpisodes = $("<ol class='olEpisodes'>");

            $(".episodes").append(olDivEpisodes);

            for (var m = 0; m < response9.length; m++) {
                var episodeName = response9[m].name;

                var liEpisode = $("<li>");
                liEpisode.text(episodeName);
                $(".olEpisodes").append(liEpisode);
            }


            if ($(".olEpisodes").children().length < 1) {
                var liEpisode = $("<li>");
                liEpisode.text("There is no available information.");
                $(".olEpisodes").append(liEpisode);
            }
        }
    };
    request9.send();

    $("#getEpisodes").html("Hide Episodes");
    $getEpisodes.off("click");
    $getEpisodes.one("click", hideEpisodes);
}
$getEpisodes.one("click", getEpisodes);



function hideCrew() {
    $(".olCrew").remove();
    $("#getCrew").html("Show Crew");
    $getCrew.off("click");
    $getCrew.one("click", getCrew);
}


function hideAkas() {
    $(".olAkas").remove();
    $("#getAkas").html("Show Akas");
    $getAkas.off("click");
    $getAkas.one("click", getAkas);
}


function hideEpisodes() {
    $(".olEpisodes").remove();
    $("#getEpisodes").html("Show Episodes");
    $getEpisodes.off("click");
    $getEpisodes.one("click", getEpisodes);
}


