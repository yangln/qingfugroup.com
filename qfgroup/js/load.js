
//document.writeln("pc");
//图片预加载
!function (obj){
    obj=obj || function(){};
    //图片路径集合
    var imgList = [
      './images/home/glass.png',
      './images/home/glass2_03.png',
      './images/home/catering_03.png',
      './images/home/movie_03.png',
      './images/home/gongyi_03.png',
      './images/home/health_03.png',
      './images/home/financial_03.png',
      './images/home/zx_03.png',
      './images/home/community_03.png',
      './images/home/education_03.png',
      './images/home/green_03.png',
      './images/home/cloud1_03.png',
      './images/home/cloud2_03.png',
      './images/home/cloud3_03.png',
      './images/home/cloud4_03.png',
      './images/home/cloud5_03.png'
   ];
    var imgSize = imgList.length, loadnum = 0;
    var pic = [];
    //
    function imagesLoad(){
        loadnum++;
        var shu = parseInt(loadnum/imgSize*100);
        //全部加载完成时执行
        if(loadnum == pic.length){
            setTimeout(function(){
              //loading图片隐藏
               document.getElementById('loading').style.display='none';
               //加载滚动页
              $('#fullpage').fullpage({
                  anchors: ['page1', 'page2', 'page3'],
                  menu: '#menu'
              });             
            },500);
            obj();
        }
    }
    for (var i = 0; i < imgSize; i++) {
        pic[i] = new Image();
        pic[i].src = imgList[i];
        pic[i].onload = function(){
            imagesLoad();
        }
        pic[i].onerror = function(){
            imagesLoad();
        }
    }
}();

