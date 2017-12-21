var indexPage = function() {
    function displayWindow() {
        var top = $("#headNav").offset().top + $("#headNav").height();
        $(window).on("scroll load", function() {
            if ($(this).scrollTop() >= top) {
                $("#fixedNav").addClass("fadeInDown");
            } else if ($(this).scrollTop() < top) {
                $("#fixedNav").removeClass("fadeInDown");
            }
        });
    };

    function focus() {
        Rundiv($("#focusRun")[0], {
            continuous: true,
            stopPropagation: true,
            speed: 300,
			startSlide: 1,
			auto: 4000,
        });
    };

    function jump() {
        var scrollObj = $("[name=listScroll]");
        scrollObj.each(function() {
            $(this).unbind("scroll").bind('scroll', function() {
                if ($(this)[0].scrollWidth - $(this).width() - $(this).scrollLeft() == 0) {
                    window.location.href = $(this).attr("addlink");
                }
            });
        });
    };

    function setWidth() {
        $("[name=listContent]").each(function() {
            $(this).css("width", $(this).find("a").length * 2.12 + "rem");
        });
    };
    this.init = function() {
        displayWindow();
        focus();
        jump();
        setWidth();
    };
};
var index = new indexPage();
index.init();