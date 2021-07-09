

const showId = localStorage.getItem("2");
localStorage.removeItem("2");


const showName = localStorage.getItem("1");
$("#newShowTitle").text(showName);
localStorage.removeItem("1");



function getShowDetails() {
    let $main = $("main");
    let $showDetails = $("#showDetails");

    let request4 = new XMLHttpRequest();
    let request5 = new XMLHttpRequest();
    let request6 = new XMLHttpRequest();

    let endpoint4 = "http://api.tvmaze.com/shows/" + showId;
    let endpoint5 = "http://api.tvmaze.com/shows/" + showId + "/seasons";
    let endpoint6 = "http://api.tvmaze.com/shows/" + showId + "/cast";

    request4.open("GET", endpoint4);
    request5.open("GET", endpoint5);
    request6.open("GET", endpoint6);

    request4.onload = function () {
        if (request4.status >= 200 && request4.status < 300) {

            let response4 = JSON.parse(request4.responseText);

            let image = response4.image.original;
            let description = response4.summary;

            let $img = $("<img>");
            $img.attr("src", image);
            $main.append($img);

            $(description).insertAfter($showDetails);
        }
    };

    request5.onload = function () {
        if (request5.status >= 200 && request5.status < 300) {

            let response5 = JSON.parse(request5.responseText);
            let numberOfSeasons = response5.length;

            let $ul = $("<ul class='seasons'>");
            $ul.text("Seasons(" + numberOfSeasons + ")");
            $("img")[0].after($ul[0]);

            for (let i = numberOfSeasons - 1; i >= 0; i--) {
                let seasonStart = response5[i].premiereDate;
                let seasonEnd = response5[i].endDate;

                let $li = $("<li>");
                $li.text(seasonStart + " - " + seasonEnd);
                $("ul").append($li);
            }
        }
    };

    request6.onload = function () {
        if (request6.status >= 200 && request6.status < 300) {

            let response6 = JSON.parse(request6.responseText);

            let $ul = $("<ul class='cast'>");
            $ul.text("Cast");
            $("ul").append($ul[0]);

            for (let i = 0; i < response6.length; i++) {
                let actorName = response6[i].person.name;

                let $li = $("<li>");
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


function getCrew() {
    let request7 = new XMLHttpRequest();

    let endpoint7 = "http://api.tvmaze.com/shows/" + showId + "/crew";

    request7.open("GET", endpoint7);

    request7.onload = function () {
        if (request7.status >= 200 && request7.status < 300) {

            let response7 = JSON.parse(request7.responseText);

            let divCrew = $("<div class='crew'>");
            let ulDivCrew = $("<ul class='ulCrew'>");
            ulDivCrew.text("Crew");

            $("p").last().append(divCrew);
            $("div").last().append(ulDivCrew);

            for (let k = 0; k < response7.length; k++) {
                let crewName = response7[k].person.name;

                let liCrew = $("<li>");
                liCrew.text(crewName);
                $("ul").last().append(liCrew);
            }
        }
    };
    request7.send();

    $("#getCrew").html("Hide Crew");
    $("#getCrew").attr("onclick", "");
    $("#getCrew").attr("onclick", "hideCrew()");
}


function getAkas() {

    let request8 = new XMLHttpRequest();

    let endpoint8 = "http://api.tvmaze.com/shows/" + showId + "/akas";

    request8.open("GET", endpoint8);

    request8.onload = function () {
        if (request8.status >= 200 && request8.status < 300) {

            let response8 = JSON.parse(request8.responseText);

            let divAkas = $("<div class='akas'>");
            let ulDivAkas = $("<ul class='ulAkas'>");
            ulDivAkas.text("Akas");

            $("p").last().append(divAkas);
            $("div").last().append(ulDivAkas);

            for (let l = 0; l < response8.length; l++) {
                let akasName = response8[l].name;

                let liAkas = $("<li>");
                liAkas.text(akasName);
                $("ul").last().append(liAkas);
            }
        }
    };
    request8.send();

    $("#getAkas").html("Hide Akas");
    $("#getAkas").attr("onclick", "");
    $("#getAkas").attr("onclick", "hideAkas()");
}


function getEpisodes() {

    let request9 = new XMLHttpRequest();

    let endpoint9 = "http://api.tvmaze.com/shows/" + showId + "/episodes";

    request9.open("GET", endpoint9);

    request9.onload = function () {
        if (request9.status >= 200 && request9.status < 300) {

            let response9 = JSON.parse(request9.responseText);

            let divEpisodes = $("<div class='episodes'>");
            let ulDivEpisodes = $("<ul class='ulEpisodes'>");
            ulDivEpisodes.text("Episodes");

            $("p").last().append(divEpisodes);
            $("div").last().append(ulDivEpisodes);

            for (let m = 0; m < response9.length; m++) {
                let episodeName = response9[m].name;

                let liEpisode = $("<li>");
                liEpisode.text(episodeName);
                $("ul").last().append(liEpisode);
            }
        }
    };
    request9.send();

    $("#getEpisodes").html("Hide Episodes");
    $("#getEpisodes").attr("onclick", "");
    $("#getEpisodes").attr("onclick", "hideEpisodes()");
    
}

function hideCrew () {
    $(".ulCrew").remove();
    $("#getCrew").html("Show Crew");
    $("#getCrew").attr("onclick", "");
    $("#getCrew").attr("onclick", "getCrew()");
}

function hideAkas () {
    $(".ulAkas").remove();
    $(".akas").remove();
    $("#getAkas").html("Show Akas");
    $("#getAkas").attr("onclick", "");
    $("#getAkas").attr("onclick", "getAkas()");
}

function hideEpisodes () {
    $(".ulEpisodes").remove();
    $(".episodes").remove();
    $("#getEpisodes").html("Show Episodes");
    $("#getEpisodes").attr("onclick", "");
    $("#getEpisodes").attr("onclick", "getEpisodes()");
}