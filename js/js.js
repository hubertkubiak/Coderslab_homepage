/**
 * Created by Hubert on 2015-10-29.
 */
$(function(){

    var Application = function(){
        function animsite () {
            $(".animsition").animsition({
                inClass: 'fade-in-down',
                outClass: 'fade-out-up',
                inDuration: 700,
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
                inDuration: 900,
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
        function highlightOption(){
                var optionOmnie = $(".omnie-option");

                optionOmnie.on("mouseenter", function(event){
                    optionOmnie.pulse(
                        {
                            backgroundColor: '#b1b1b1'
                        },
                        {
                            returnDelay : 60000,

                            pulses      : 1
                        }
                    );
                });

                optionOmnie.on("mouseleave", function(event){
                    optionOmnie.pulse(
                        {
                        backgroundColor:  '#EFEDEA'
                        },
                        {
                        returnDelay : 30000,

                        pulses      : 1
                        }
                    );
                });

            var optionPortfolio = $(".portfolio-option");

            optionPortfolio.on("mouseenter", function(event){
                optionPortfolio.pulse(
                    {
                        backgroundColor: '#b1b1b1'
                    },
                    {
                        returnDelay : 60000,

                        pulses      : 1
                    }
                );
            });

            optionPortfolio.on("mouseleave", function(event){
                optionPortfolio.pulse(
                    {
                        backgroundColor:  '#EFEDEA'
                    },
                    {
                        returnDelay : 30000,

                        pulses      : 1
                    }
                );
            });

            var optionKontakt = $(".contakt-option");

            optionKontakt.on("mouseenter", function(event){
                optionKontakt.pulse(
                    {
                        backgroundColor: '#b1b1b1'
                    },
                    {
                        returnDelay : 60000,

                        pulses      : 1
                    }
                );
            });

            optionKontakt.on("mouseleave", function(event){
                optionKontakt.pulse(
                    {
                        backgroundColor:  '#EFEDEA'
                    },
                    {
                        returnDelay : 30000,

                        pulses      : 1
                    }
                );
            })

        }
        function hideOutElements () {
            var menu = $(".navbar");
            var firstSection = $("#omnie");
            var oMnie = $(".omnie-container");
            var portfolio = $('#portfolio');
            var portfolioH1 = $('#portfolio h1');
            var contact = $('#kontakt');
            var contactData = $('.contactdata');

            $(window).scroll(function (event) {
                if (menu.offset().top > firstSection.offset().top-100) {
                    oMnie.pulse(
                        {
                            color: "white"
                        },
                        {
                            returnDelay : 1000000,
                            pulses      : 1
                        }
                    );
                }
                if (menu.offset().top > portfolio.offset().top-100) {
                    portfolioH1.pulse(
                        {
                            color: "white"
                        },
                        {
                            returnDelay : 1000000,
                            pulses      : 1
                        }
                    );
                }
                if (menu.offset().top > contact.offset().top-100) {
                    contactData.pulse(
                        {
                            color: "white"
                        },
                        {
                            returnDelay : 1000000,
                            pulses      : 1
                        }
                    );
                }
            });
        }
        function scrollPage(){
            var navigationOpt = $(".menu1 a");
            navigationOpt.on("click", function(event){
                var hrefs = $(this).attr("href");
                $('html,body').animate({
                    scrollTop:$(hrefs).offset().top
                }, 400);
            });
            var circlesOpt = $(".option a");
            circlesOpt.on("click", function(event){
                var hrefs = $(this).attr("href");
                $('html,body').animate({
                    scrollTop:$(hrefs).offset().top
                }, 400);
            });
        }
        return {
            hideHeading: hideHeading,
            highlightOption: highlightOption,
            hideOutElements: hideOutElements,
            scrollPage: scrollPage,
            animsite: animsite
        };
    };

    var app = new Application();
    app.scrollPage();
    app.hideOutElements();
    app.highlightOption();
    app.hideHeading();
    app.animsite();
});