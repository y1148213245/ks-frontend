(function (a) {
  a.fn.extend({
    soChange: function (b) {

      b = a.extend({
        thumbObj: null,
        botPrev: null,
        botNext: null,
        thumbNowClass: "now",
        thumbOverEvent: true,
        slideTime: 1000,
        autoChange: true,
        clickFalse: true,
        overStop: true,
        changeTime: 3000,
        delayTime: 300
      }, b || {});

      var h = a(this);
      var i;
      var k = h.size();
      var e = 0;
      var g;
      var c;
      var f;
      setTimeout(s, 3000);
      function d() {
        if (e != g) {
          if (b.thumbObj != null) {
            if (h.eq(g).attr('original') && h.eq(g).attr('src') == 'http://static.meishij.net/images/grey.gif') {
              h.eq(g).attr('src', h.eq(g).attr('original'));
              h.eq(g).removeAttr('original');
            }
            a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass)
          }
          if (b.slideTime <= 0) {
            h.eq(e).hide();
            h.eq(g).show()
          } else {
            h.eq(e).fadeOut(b.slideTime);
            h.eq(g).fadeIn(b.slideTime)
          }
          e = g;
          if (b.autoChange == true) {
            clearInterval(c);
            c = setInterval(j, b.changeTime)
          }
        }
      }

      function s() {
        for (var i = 2; i < k; i++) {
          if (h.eq(i).attr('original') && h.eq(i).attr('src') == 'http://static.meishij.net/images/grey.gif') {
            h.eq(i).attr('src', h.eq(i).attr('original'));
            h.eq(i).removeAttr('original');
          }
        }
      }

      function j() {
        g = (e + 1) % k;
        d()
      }

      h.hide().eq(0).show();
      if (b.thumbObj != null) {
        i = a(b.thumbObj);
        i.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass);
        i.click(function () {
          g = i.index(a(this));
          d();
          if (b.clickFalse == true) {
            return false
          }
        });
        if (b.thumbOverEvent == true) {
          i.mouseenter(function () {
            g = i.index(a(this));
            f = setTimeout(d, b.delayTime)
          });
          i.mouseleave(function () {
            clearTimeout(f)
          })
        }
      }
      if (b.botNext != null) {
        a(b.botNext).click(function () {
          if (h.queue().length < 1) {
            j()
          }
          return false
        })
      }
      if (b.botPrev != null) {
        a(b.botPrev).click(function () {
          if (h.queue().length < 1) {
            g = (e + k - 1) % k;
            d()
          }
          return false
        })
      }
      if (b.autoChange == true) {
        c = setInterval(j, b.changeTime);
        if (b.overStop == true) {
          h.mouseenter(function () {
            clearInterval(c)
          });
          h.mouseleave(function () {
            c = setInterval(j, b.changeTime)
          })
        }
      }
    }
  })
})(jQuery);
