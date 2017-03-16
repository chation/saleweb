//返回顶部插件
(function ($) {
    jQuery.fn.scrollTo = function (speed) {
        var targetOffset = $(this).offset().top;
        $('html.body').stop().animate({ scrollTop: targetOffset }, speed);
        return this;
    };
})(jQuery);