function load(item) {
    var element = document.getElementById(item).value;

    console.log(item);
    console.log(element);

    if(localStorage.getItem(element) != undefined &&
        localStorage.getItem(element) != null) {

        // We have the article in the cache
        console.log("Cached data for " + element);
        document.getElementById("content").innerHTML =
            localStorage.getItem(element);

    } else {
        // It's not in the cache

        if (window.navigator.onLine) {
            console.log("working online");
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log("Fetch data for " + xhttp.responseText);
                    // Save result in cache
                    localStorage.setItem(element, xhttp.responseText);
                    document.getElementById("content").innerHTML = xhttp.responseText;
                }
                else{
                    document.getElementById("content").innerHTML = "your offline";
                }
            };
            xhttp.open("GET", element, true);
            xhttp.send();

            xhttp.addEventListener("error", function() {
                // We are offline
                console.log("error event");
                document.getElementById("content").innerHTML = "your offline";

            });
        }
        //else{
        //    console.log("working offline");
        //    document.getElementById("content").innerHTML = "You might be offline.";
        //}
    }
}

function clear(){
    log.console("clearning content");
    document.getElementById("content").innerHTML = "";
}
//function checkOnline(){
//    if (window.navigator.onLine) {
//        console.log("Getting started.");
//        document.getElementById("content").innerHTML = "You might be online.";
//    }
//
//}