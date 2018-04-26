$(function(){

	/* p2--video */
	var mvBtn=$('.mv-bg').find('img');
	var oVideoBox=$('.video-box');
	var oVClose=$('.video-close');
	var oVideo=$('.p2-video');


	mvBtn.click(function(){
		oVideo.attr('src','../../video/'+$(this).attr("class")+'.mp4');
		//oVideo.attr('src','../video/ad.mp4');
		oVideoBox.show();
		oVideo.get(0).play();
	});

	oVClose.click(function(){
		oVideo.get(0).pause();
		oVideoBox.hide();
	})



});
