$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
	animationLoop: false,
	slideshow: false
  });
  
});

$(window).load(function() {
				
	new jPlayerPlaylist({
		jPlayer: "#player_1",
		cssSelectorAncestor: "#audio_1"
	}, [
		{
			title:"Cro Magnon <span> Man </span>",
			mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
			oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
		},
		{
			title:"Your <span>Face</span>",
			mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
			oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
		},
		{
			title:"Cyber <span>Sonnet</span>",
			mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
			oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
		},
		{
			title:"Tempered <span>Song</span>",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
		},
		{
			title:"Hidden",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		},		
		{
			title:"Lismore",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
		},
		{
			title:"The <span>Separation</span>",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg"
		},
		{
			title:"Beside <span>Me</span>",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg"
		},		
		{
			title:"Stirring of a <span>Fool</span>",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
		},		
		{
			title:"Thin <span>Ice</span>",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg"
		}
	], {
		swfPath: "js",
		supplied: "mp3, oga",
		wmode: "window",
		smoothPlayBar: true,
		keyEnabled: true,
		cssSelectorAncestor:"#audio_1"	
	});
	
	
	jQuery('.blockScroll, .scrollCont').jScrollPane({
		showArrows:true,
		verticalDragMinHeight: 29,
		verticalDragMaxHeight: 29
	});
	
	
	
	$('.jp-play, .jp-previous, .jp-next').click(function(){$('.mainImg').css({display:'none'}), $('.imgGif').css({display:'block'}); return false;});
	$('.jp-pause').click(function(){$('.mainImg').css({display:'block'}), $('.imgGif').css({display:'none'}); return false;});
	
	
	
	
		


});



