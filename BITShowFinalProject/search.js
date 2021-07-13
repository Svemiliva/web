var input = $("#inputField");
var gallery = $(".gallery");

function searchForShow() {

    var searchShowRequest = new XMLHttpRequest;
    var query = input.val();
    var searchShowEndpoint = "http://api.tvmaze.com/search/shows?q=" + query;

    searchShowRequest.open("GET", searchShowEndpoint);

    searchShowRequest.onload = function () {
        if (searchShowRequest.status >= 200 && searchShowRequest.status < 300) {
            var response2 = JSON.parse(searchShowRequest.responseText);

            $("#searchOptions").empty();    //this empties all the options from search list

            for (var j = 0; j < response2.length && j < 10; j++) {
                var searchResult = response2[j].show.name;
                var searchedShowId = response2[j].show.id;

                var liOption = $("<li>");
                liOption.text(searchResult);
                liOption.attr("class", "searchedOption dropdown-item");
                liOption.attr("id", searchedShowId);

                $("#searchOptions").append(liOption);
            }

            $(".searchedOption").click(function () {
                var showName = $(this).text();
                var showId = $(this).attr("id");

                localStorage.setItem("1", showName);
                localStorage.setItem("2", showId);
                window.location.replace("tvShow.html");
            });
        }
    }
    searchShowRequest.send();
}
input.keyup(searchForShow);


/* If we want that in search menu after we type something and hit enter it displays us TV shows that correspond search query, we will insert this piece of code */

/*
input.keypress(function (e) {
    if (e.which == 13) {

        e.preventDefault();

        function showSearched() {

            var showSearchedRequest = new XMLHttpRequest;

            var showSearchedEndpoint = "http://api.tvmaze.com/search/shows?q=" + input.val();

            showSearchedRequest.open("GET", showSearchedEndpoint);

            gallery.empty();

            showSearchedRequest.onload = function () {
                if (showSearchedRequest.status >= 200 && showSearchedRequest.status < 300) {
                    var response3 = JSON.parse(showSearchedRequest.responseText);

                    for (let i = 0; i < response3.length; i++) {

                        var name = response3[i].show.name;
                        var image = response3[i].show.image.medium;
                        var showId = response3[i].show.id;

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
            showSearchedRequest.send();
        }
        showSearched();
    }
}); */