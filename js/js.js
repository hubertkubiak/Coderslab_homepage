/**
 * Created by Hubert on 2015-10-29.
 */
$(function(){

    var Application = function(){
        function init() {
            console.log("init");
        }
        function stickyMenu (){
            console.log(12);

        }

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
           init: init,
           stickyMenu: stickyMenu,
           animsite: animsite
        };
    };

    var app = new Application();
    app.init();
    app.stickyMenu();
    app.animsite();
});