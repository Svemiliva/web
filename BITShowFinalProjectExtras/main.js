const input = $("#inputField");
const gallery = $(".gallery");

function showTop50() {

    let request = new XMLHttpRequest;

    let endpoint = "http://api.tvmaze.com/shows";

    request.open("GET", endpoint);

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let response = JSON.parse(request.responseText);

            for (let i = 0; i < 50; i++) {
                let name = response[i].name;
                let image = response[i].image.medium;
                let showId = response[i].id;

                let $div = $("<div class='show'>");
                gallery.append($div);

                let $img = $("<img>");
                $img.attr("src", image);
                $div.append($img);

                let $a = $("<a>");
                $a.addClass("userLink");
                $a.attr("href", "./tvShow.html");
                $a.attr("target", "_blank");
                $a.attr("id", showId);
                $div.append($a);

                let $p = $("<p>");
                $p.text(name);
                $p.appendTo($a[0]);
            }

            $("a").click(function () {
                let showName = $(this).find("p").text();
                let showId = $(this).attr("id");

                localStorage.setItem("1", showName);
                localStorage.setItem("2", showId);
            })
        }
    }
    request.send();
}
showTop50();


function searchForShow() {

    let request2 = new XMLHttpRequest;
    let query = input.val();
    let endpoint2 = "http://api.tvmaze.com/search/shows?q=" + query;

    request2.open("GET", endpoint2);

    request2.onload = function () {
        if (request2.status >= 200 && request2.status < 300) {
            let response2 = JSON.parse(request2.responseText);

            $("#searchOptions").empty();    //this empties all the options from search list

            for (let i = 0; i < response2.length && i < 10; i++) {
                let searchResult = response2[i].show.name;

                let $optionNode = $("<option>");
                $optionNode.text(searchResult);

                $("#searchOptions").append($optionNode);
            }
        }
    } 
    request2.send();
}
input.keydown(searchForShow);



input.keypress(function (e) {
    if (e.which == 13) {

        e.preventDefault();

        function showSearched() {

            let request3 = new XMLHttpRequest;

            let endpoint3 = "http://api.tvmaze.com/search/shows?q=" + input.val();

            request3.open("GET", endpoint3);

            gallery.empty();

            request3.onload = function () {
                if (request3.status >= 200 && request3.status < 300) {
                    let response3 = JSON.parse(request3.responseText);

                    for (let i = 0; i < response3.length; i++) {

                        let name3 = response3[i].show.name;
                        let image3 = response3[i].show.image.medium;
                        let showId3 = response3[i].show.id;

                        let $div3 = $("<div class='show'>");
                        gallery.append($div3);

                        let $img3 = $("<img>");
                        $img3.attr("src", image3);
                        $div3.append($img3);

                        let $a3 = $("<a>");
                        $a3.addClass("userLink");
                        $a3.attr("href", "./tvShow.html");
                        $a3.attr("target", "_blank");
                        $a3.attr("id", showId3);
                        $div3.append($a3);

                        let $p3 = $("<p>");
                        $p3.text(name3);
                        $p3.appendTo($a3[0]);
                    }

                    $("a").click(function () {
                        let showName = $(this).find("p").text();
                        let showId = $(this).attr("id");
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