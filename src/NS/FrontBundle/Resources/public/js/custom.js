$(window).load(function () {
    navistudio.initSlider();
    navistudio.initScroll();
    navistudio.initNav();
});

(function($){
    window.navistudio = {
        /**
         * Initializes audio player
         * @param {Object} media
         */
        initPlayer: function(media){
            // setting playlist height
            $('.jp-playlist').height(media.length * 17);

            // initializing player
            new jPlayerPlaylist(
                {
                    jPlayer: "#player_1",
                    cssSelectorAncestor: "#audio_1"
                },
                media,
                {
                    swfPath: "js",
                    supplied: "mp3",
                    wmode: "window",
                    smoothPlayBar: true,
                    keyEnabled: true,
                    cssSelectorAncestor:"#audio_1",
                    play: function(e){
                        $('.imgGif').add('.mainImg').hide();
                        $('.imgGif[data-item-id=' + e.jPlayer.status.media.itemId + ']').show();
                    },
                    pause: function(e){
                        $('.imgGif[data-item-id=' + e.jPlayer.status.media.itemId + ']').hide();
                        $('.mainImg').show();
                    }
                }
            );
        },

        /**
         * Initializes slider
         */
        initSlider: function(){
            $('.flexslider').flexslider({
                animation: "slide",
                animationLoop: false,
                slideshow: false
            });
        },

        /**
         * Initializes scroll
         */
        initScroll: function(){
            $('.blockScroll, .scrollCont').jScrollPane({
                showArrows:true,
                verticalDragMinHeight: 29,
                verticalDragMaxHeight: 29
            });
        },

        /**
         * Initializes map
         */
        initMap: function(){
            // map
            var _m = $('.ns-map');
            if (_m.length) {
                var mapOptions = {
                    center: new google.maps.LatLng(55.777306, 37.643594),
                    zoom: 17,
                    scrollwheel: false
                };
                var map = new google.maps.Map(_m.get(0), mapOptions);

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(55.777306, 37.643594),
                    map: map,
                    title:""
                });
            }
        },

        /**
         * Initializes ajax navigation
         */
        initNav: function(){
            if (!History.enabled) return;

            History.Adapter.bind(window,'statechange', function() {
                var res = History.getState().data.res;
                var html = $(res);

                // replacing content
                $('.boxMain').html(html.find('.boxMain').html());
                $('.mainNav').html(html.find('.mainNav').html());

                // fixing page class
                $('body > div').get(0).className = html.find('.repeat-x').parent().attr('class');

                // removing scroll
                if (html.find('.news, .clients').length) {
                    $('.blockCont').removeClass('scrollCont').css({'background':'none'});
                }

                // reinitializing
                navistudio.initSlider();
                navistudio.initScroll();
                navistudio.initMap();
            });

            //init
//            initState = $('body').data('init');
//            History.replaceState(initState, initState.data.title, location.pathname + location.search);


            $('a').live('click', function(){
                var href = $(this).attr('href');
                $.get(href, function(res){
                    History.pushState({res:res}, '', href);
                });
                return false;
            });
        }
    };
})(jQuery);
