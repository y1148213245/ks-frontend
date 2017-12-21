$(document).ready(function (){tab("#one_image","#one_con a","#btn_prev","#btn_next","#one_visual")});
function tab(IClass,TClass,Pre,Next,vis) {
    var timer=null;
    $dragBln = false;
    $(IClass).touchSlider({
        flexible : true,
        speed : 200,
        btn_prev : $(Pre),
        btn_next : $(Next),
        paging : $(TClass),
        counter : function (e) {
            $(TClass).removeClass("on").eq(e.current-1).addClass("on");
        }
    });
    $(IClass).bind("mousedown", function() {
        $dragBln = false;
    })
    $(IClass).bind("dragstart", function() {
        $dragBln = true;
    })

     timer = setInterval(function() { $(Next).click();}, 3000);
    $(vis).hover(function() {
        clearInterval(timer);
    }, function() {
         timer = setInterval(function() { $(Next).click();}, 3000);
    })
    $(IClass).bind("touchstart", function() {
        clearInterval(timer);
    }).bind("touchend", function() {
        timer = setInterval(function() { $(Next).click();}, 3000);
    })
}


