$(document).ready(function(){
    var menu_open;
    menu_open=false
    $("#navSwitch").on("mouseenter",function(){
        if (menu_open==false) {
            $("#open_menu").html("/ Open the Menu");
        }
        else {
            $("#open_menu").html("/ Close the Menu");
        }
        $("#open_menu").attr("style", "display:");   
    });
    $("#navSwitch").on("mouseleave",function(){
        $("#open_menu").attr("style", "display:none");   
    });    
    $("#navSwitch").click(function(){
        if (menu_open==true) {
            $("#navSwitch").css({
                "-webkit-transform": "rotate(45deg)",
                "-moz-transform": "rotate(45deg)",
                "-o-transform": "rotate(45deg)",
                "-ms-transform": "rotate(45deg)"
            });
            $("#nav").attr("style","display:none");
            menu_open=false;
        }
        else {
            $("#navSwitch").css({
                "-webkit-transform": "rotate(0deg)",
                "-moz-transform": "rotate(0deg)",
                "-o-transform": "rotate(0deg)",
                "-ms-transform": "rotate(0deg)"
            });
            $("#nav").attr("style","display:");
            menu_open=true;            
        }

    }); 
});

