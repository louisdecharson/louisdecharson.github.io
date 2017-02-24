var reveal = 4;

$(document.body).ready(function(){
    var results = $("a#results").length;
    for (var k=reveal; k < results; k++) {
        $("a#results").eq(k).removeAttr("href");
        $("a#results").eq(k).addClass("soon");
    }
});
