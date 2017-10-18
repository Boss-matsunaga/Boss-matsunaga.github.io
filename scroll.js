$(function(){
    $('a[href^=#]').live('click',function() {
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});