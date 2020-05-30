$(function(){
	// 手势切换轮播图
	// 1.自动轮播
	// 2.点随着变化
	//3.完成手势切换
	//自动轮播，无缝
	var $banner=$('.sn_banner');
	var $width=$banner.width();
	
	var $img=$banner.find('ul:first');
	var $points=$banner.find('ul:last').find('li');

	var index=1;
	
	var AnimateFunc=function(){
		$img.animate({transform:'translateX('+(-index*$width)+'px)'},200,function(){
			//无缝
			if(index>=9){
				index=1;
				$img.css({transform:'translateX('+(-index*$width)+'px)'});
			}else if(index<=0){
				index=8;
				$img.css({transform:'translateX('+(-index*$width)+'px)'});
			}
			//点1-8
			$points.removeClass('now').eq(index-1).addClass('now');
		});
	};
	var timeId=setInterval(function(){
		index++;
		AnimateFunc();
		},2000);
	
	// //手势切换
	$banner.on('swipeLeft',function(){
		console.log('next');
		clearInterval(timeId);
		index++;
		AnimateFunc();
		timeId=setInterval(function(){
			index++;
			AnimateFunc();
			},2000);
		
	});
	$banner.on('swipeRight',function(){
		console.log('prev');
		index--;
		AnimateFunc();
	});
	
});