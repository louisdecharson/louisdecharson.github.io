var reveal = 0;

$(document.body).ready(function(){
    var results = $("a#results").length - reveal;
    for (var k=0; k < results; k++) {
        $("a#results").eq(k).removeAttr("href");
        $("a#results").eq(k).addClass("soon");
    }
});
