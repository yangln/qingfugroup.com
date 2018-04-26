/*公共js*/
/* **************** 头部导航条 ************************/
$(function(){
	$( '.nav li' ).hover(
       function(){
       		//alert(1);
   			$(this).addClass('active');
   			$(this).children('.nav-body').stop().show();
       },
       function(){
   			$(this).removeClass('active');
   			$(this).children('.nav-body').stop().hide();
       }
  	);
  
})
