  //video  
function getByClass(obj,sClass){
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(sClass);
	}
	var aResult = [];
	var aEle = obj.getElementsByTagName('*');
	var re = new RegExp('\\b'+sClass+'\\b');
	for(var i=0; i<aEle.length; i++){
		if(aEle[i].className.search(re)!=-1){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

window.onload=function(){
	var avs=document.querySelectorAll('video');
	var vBox=document.querySelector('#p2video-box');
	var vbtn=getByClass(vBox,'play-btn');
	var vCover=getByClass(vBox,'cover');
	//点击按钮播放
	for(var i=0; i<vbtn.length;i++){
		;(function(index){
			vbtn[i].onclick=function(){
				//暂停其他视频
				for (var i=0; i<avs.length;i++) {
					avs[i].pause();
					vCover[i].style.display='block';
				};
				//播放当前视频
				avs[index].play();
				vCover[index].style.display='none';
			}
		})(i);
	}
	//点击视频暂停
	for(var i=0;i<avs.length;i++){
		avs[i].onclick=function(){
			this.pause();
		}
	}
	setInterval(isPaused,300);
	function isPaused(){
		for(var i=0; i<avs.length;i++){
			if(avs[i].paused){
				vCover[i].style.display='block';
			}
		}
	};
}
// 设置vi-height 
$(function(){
	var Winheight = $(window).height();
	$('.vi').css('height',(Winheight-70)/2)
})
// news 
$(function(){
	var news=$('.news');
	news.on('mouseover','div',function(){
		$(this).find('a').find('img').attr('src','images/home/new0'+$(this).index()+'.jpg');
		$(this).find('a').find('img').css('transform','scale(1.2)')
	});
	news.on('mouseout','div',function(){
		$(this).find('a').find('img').attr('src','images/home/new00'+$(this).index()+'.jpg');
		$(this).find('a').find('img').css('transform','scale(1)')
	});
});
$(function(){
	$('#menu li a').hover(function(){
		$(this).siblings("span").css('display','block');
	},function(){
		$(this).siblings('span').css('display','none');
	})
});
// sign
$(document).ready(function(){
	var city=$('.area').children('div');
	city.hover(function(){
		$(this).find('span').show();
	},function(){
		$(this).find('span').hide();
	})
});
//公告
$(function(){
	$('.adBtn').children('.adTit').hover(function(){
		$(this).addClass('fs14').text('青蚨集团现身世界互联网大会，创新金融方案聚焦世界目光');
	},function(){
		$(this).removeClass('fs14').text('集团公告');
	})			
});