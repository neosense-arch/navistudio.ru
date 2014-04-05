$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
	animationLoop: false,
	slideshow: false
  });
});

jQuery('.blockScroll, .scrollCont').jScrollPane({
    showArrows:true,
    verticalDragMinHeight: 29,
    verticalDragMaxHeight: 29
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
        }
    };
})(jQuery);
