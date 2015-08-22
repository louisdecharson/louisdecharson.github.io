var lteIE8, isPermalink, infiniteScroll, IOS, nextSlide;currPage=1;
lteIE8 = $("html").is(".lte-ie8") ? true : false;
isPermalink = typeof isPermalink === "undefined" ? false : true;
infiniteScroll = typeof infiniteScroll === "undefined" ? false : true;
IOS = navigator.platform == "iPad" || navigator.platform == "iPhone" || navigator.platform == "iPod" ? true : false;

function(a) {
    a(document).ready(function() {
        var c, d, h;
        c = false;
        d = false;
        heightRef = $(window).height();
        widthRef = $(window).width();
        $(document).on("mouseenter","#nav_toggle", function(){
                if (c == false) {
                    $(".tag_search").attr("value", "/Open menu");
                }
            })
        $(document).on("mouseleave","#nav_toggle", function(){
                if (c == false) {
                    $(".tag_search").attr("value", tag_searchVal);
                }
            })
        $(document).on("mouseenter",".tag_search",function(){
                if (c == false && infiniteScroll == true) {
                    $(this).attr("value", "/Search tags").toggleClass("tag_search_hover");
                }
            })
        $(document).on("mouseleave",".tag_search",function(){
                if (c == false && infiniteScroll == true) {
                    $(this).attr("value", tag_searchVal).toggleClass("tag_search_hover");
                }
            });
        $("#nav_toggle").click(function() {
            doNav();
        });
        h.focus(function(a) {
            if (c == false && infiniteScroll == true) {
                openNav();
            }
            if (a.target.value == a.target.defaultValue) {
                a.target.value = "";
            }
        });
        $(".post_table_cell_perma img,.post_table_cell_perma iframe").each(function() {
            $(this).parent().css({
                "text-align": "center",
                "padding-top": "19px",
                "padding-bottom": "19px",
                "margin-top": "36px",
                "margin-bottom": "36px"
            });
        });
        h.blur(function(a) {
            if (a.target.value == "") {
                a.target.value = a.target.defaultValue;
            }
        });
        doNav = function() {
            if (!IOS || !infiniteScroll) {
                if (c == false) {
                    openNav();
                } else {
                    closeNav();
                }
            }
        };
        closeNav = function() {
            if (!IOS || !infiniteScroll) {
                $("body").scrollTo({
                    top: "-=64px",
                    left: "+=0"
                }, 200);
                $("#navSwitch").css({
                    "-webkit-transform": "rotate(45deg)",
                    "-moz-transform": "rotate(45deg)",
                    "-o-transform": "rotate(45deg)",
                    "-ms-transform": "rotate(45deg)"
                });
                $("#nav").slideToggle(200);
                c = false;
            }
        };
        openNav = function() {
            if (!IOS || !infiniteScroll) {
                $(".tag_search").attr("value", tag_searchVal);
                $(".tag_search").css("background-color", "transparent");
                $("body").scrollTo({
                    top: "+=64px",
                    left: "+=0"
                }, 200);
                $("#navSwitch").css({
                    "-webkit-transform": "rotate(0deg)",
                    "-moz-transform": "rotate(0deg)",
                    "-o-transform": "rotate(0deg)",
                    "-ms-transform": "rotate(0deg)"
                });
                $("#nav").slideToggle(200);
                c = true;
           		}
        	};
    });
}(window.jQuery);

