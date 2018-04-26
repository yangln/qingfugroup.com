
$(document).ready(function(event){
	/*header-s*/
	var menuon=$('.menuson');
	var menuBox=$('.menu-box');
	$('.menu-icon').click(function(){
		menuBox.stop().slideToggle();
		$(this).toggleClass('menu-icon-close')
	})
	menuon.parent().click(function(){
		$(this).find('.menuson').stop().slideToggle();
	})
	var bodyH = $('body').height(),
		docH = $(document).height(),
		winH = $(window).height(),
		htmlH = $('html').height();
	console.log('body:'+bodyH+';document:'+docH+';window:'+winH+';html:'+htmlH)
	if (bodyH < docH) {
		console.log('xiao');
		$('footer').css({
			'position':'absolute',
			'bottom':0,
			'left':0
		});
	}
})