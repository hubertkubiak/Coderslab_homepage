/**
 * Created by Hubert on 2015-10-29.
 */
$(function(){

    var Application = function(){
        function hideHeading () {
            var menu = $(".navbar");
            var header = $("header");

            $(window).scroll(function (event) {
                if (menu.offset().top > header.offset().top+50) {
                    header.addClass("faded", 400);
                }
                if (menu.offset().top <= header.offset().top+50) {
                    header.removeClass("faded", 400);
                }
            });
        }
        //function changeOpacity () {
        //    var menu = $(".navbar");
        //    var firstSection = $(".three-options");
        //
        //    $(window).scroll(function (event) {
        //        if (menu.offset().top > firstSection.offset().top+50) {
        //            menu.css({"opacity": 1})
        //        }
        //        if (menu.offset().top <= firstSection.offset().top+50) {
        //            menu.css({"opacity": 0})
        //        }
        //    });
        //}
        function animsite () {
            $(".animsition").animsition({
                inClass: 'fade-in-down',
                outClass: 'fade-out-up',
                inDuration: 1000,
                outDuration: 800,
                touchSupport: true,
                loading: true,
                loadingParentElement: 'body',
                loadingClass: 'animsition-loading',
                timeout: false,
                timeoutCountdown: 5000,
                onLoadEvent: true,
                browser: [ 'animation-duration', '-webkit-animation-duration']
            });
            $(".animsition2").animsition({
                inClass: 'fade-in-left',
                outClass: 'fade-out-right',
                inDuration: 800,
                outDuration: 800,
                touchSupport: true,
                loading: true,
                loadingParentElement: 'body',
                loadingClass: 'animsition-loading',
                timeout: false,
                timeoutCountdown: 5000,
                onLoadEvent: true,
                browser: [ 'animation-duration', '-webkit-animation-duration']
            });
        }
        return {
            hideHeading: hideHeading,
            //changeOpacity: changeOpacity,
            animsite: animsite
        };
    };

    var app = new Application();
    //app.changeOpacity();
    app.hideHeading();
    app.animsite();
});