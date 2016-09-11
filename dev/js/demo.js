//head fixed
$(window).scroll(function(){
	if(scrollY > 82){
		$(".head").css("margin-top","82px");
		$(".top").css("position","fixed");
	};
	scrollY > 82 ? $(".fixed").css("display","block") : $(".fixed").css("display","none");	
});
// 回到顶部
$(".fixed").click(function(){
	$("body").animate({scrollTop:"0px"},500);
});
$(".nav .list").find("a").click(function(){
	$(this).addClass("current").parent().siblings().find("a").removeClass("current");
});
// 左侧礼包
$(".ad-dot").find(".adot").click(function(){
	if($(this).attr("class") != "icon adot current"){
		$(this).addClass("current").siblings().removeClass("current");
		$(".wrap").css("left") == "-202px" ? $(".wrap").animate({left:"0px"},"normal") : $(".wrap").animate({left:"-202px"},"normal");
	}	
});
// 初始化我的任务
$(".task-content").find(".task-wrap").css("display","none").animate({top:"0px",opacity:'show'},"slow");
// 我的任务
$(".task-title-2").click(function(){
	$(this).addClass("cur").siblings().removeClass("cur");
	$(".more-goods").css("display","none");
	$(".task-content-left").css("display","block");
	$(".task-content-right").css("display","none");
	$(".task-wrap").css({top:"90px"});
	$(".task-content").find(".task-wrap").css("display","none").animate({top:"0px",opacity:'show'},"slow");
	$(".task-content").find(".turn-right").css("display","block");
});
// 积分兑换
$(".task-title-3").click(function(){
	$(this).addClass("cur").siblings().removeClass("cur");
	$(".more-goods").css("display","block");
	$(".task-content-left").css("display","none");
	$(".task-content-right").css("display","block")
	$(".task-wrap").css({top:"90px"});
	$(".task-content").find(".task-wrap").css("display","none").animate({top:"0px",opacity:'show'},"slow");
	$(".task-content").find(".turn-right").css("display","none");
});
// task向右滑动
$(".task-content").find(".turn-right").click(function(){
	$(".task-wrap").animate({left:"-540px"},"normal");
	$(".task-content").find(".turn-right").css("display","none");
	$(".task-content").find(".turn-left").css("display","block");
});
// task向左滑动
$(".task-content").find(".turn-left").click(function(){
	$(".task-wrap").animate({left:"0px"},"normal");
	$(".task-content").find(".turn-right").css("display","block");
	$(".task-content").find(".turn-left").css("display","none");
});

// 会员滑动
// 右
var right = -1100,
	left;
$(".vip-list").find(".vip-right").click(function(){
	console.log(right);
	if(right == -1540){
		$(".vip-right").css("display","none");
	}
	$(".vip-ul").animate({left : right+"px"},"normal");
	$(".vip-left").css("display","block");
	right >= -1100 ? right = -1540 : right = -1100;
	left = -1100;
});
// 左
$(".vip-list").find(".vip-left").click(function(){
	console.log(left);
	if(left == 0){
		$(".vip-left").css("display","none");
	}
	$(".vip-ul").animate({left : left +"px"},"normal")
	$(".vip-right").css("display","block");
	left >= -1100 ? left = 0 : left = -1100;
});

// vip播放
var data = {"code":0,"data":[{"href":"http://v.youku.com/v_show/id_XMTY4MjQ1MjAzMg==.html?spm=0.0.0.0.A6Ar9w","imgSrc":"http://r3.ykimg.com/050E000057B2C1A967BC3D48C203BC41","title1":"陆垚知马俐","title2":"爱是想触碰又缩回手","play":"238.6万次播放","comment":"1,178次评论"},{"href":"http://v.youku.com/v_show/id_XMTY4MTg0Mjk3Ng==.html","imgSrc":"http://r1.ykimg.com/050E000057AE801F67BC3D2A230C7F7C","title1":"快手枪手快枪手","title2":"西部夺宝逗比联盟","play":"189.1万次播放","comment":"684次评论"},{"href":"http://v.youku.com/v_show/id_XMTY3ODAyOTM1Mg==.html","imgSrc":"http://r3.ykimg.com/050E000057ABE2A167BC3D7A2F014F58","title1":"我的新野蛮女友","title2":"野蛮宋茜狂撩车太贤","play":"292.1万次播放","comment":"719次评论"},{"href":"http://v.youku.com/v_show/id_XMTY3MjU3MTc4NA==.html","imgSrc":"http://r4.ykimg.com/050E000057A98BE667BC3D5346042517","title1":"致青春:原来你还在这里","title2":"双亦CP舔屏校园虐恋","play":"1,012万次播放","comment":"4,031次评论"},{"href":"http://v.youku.com/v_show/id_XMTY3NjU5NDUzNg==.html","imgSrc":"http://r3.ykimg.com/050E000057A9727E67BC3D53D9083766","title1":"金钱怪兽","title2":"克鲁尼演绎“恐怖直播”","play":"38.4万次播放","comment":"113次评论"},{"href":"http://v.youku.com/v_show/id_XMTY3MjUxMDg5Ng==.html","imgSrc":"http://r4.ykimg.com/050E000057A47BEA67BC3D3FDA05FA45","title1":"铜牌巨星","title2":"体操床戏配R级喜剧","play":"117.4万次播放","comment":"167次评论"},{"href":"http://cps.youku.com/redirect.html?id=00014f7f","imgSrc":"http://r3.ykimg.com/050E000057B2DFF567BC3D42BF062C82","title1":"辣眼烧心无法直视","title2":"这些影剧都是送命题","play":"1,786万次播放","comment":"6,011次评论"},{"href":"http://v.youku.com/v_show/id_XMTYzNTgxODQzMg==.html","imgSrc":"http://r1.ykimg.com/050E000057AAA29867BC3D53D60D4F53","title1":"回来吧大叔","title2":"Rain变逗比实力搞笑","play":"113.6万次播放","comment":"347次评论"},{"href":"http://v.youku.com/v_show/id_XMTYzNDcyNzg1Mg==.html","imgSrc":"http://r4.ykimg.com/050E0000579B16E767BC3D4443079333","title1":"丰顺儿","title2":"SJ圭贤演绎人机虐恋","play":"628.1万次播放","comment":"790次评论"},{"href":"http://v.youku.com/v_show/id_XMTQzNTE5OTg2OA==.html","imgSrc":"http://r2.ykimg.com/050E000057B3E66067BC3D663309A351","title1":"宫崎骏笔下的小偷","title2":"时隔30年的鲁邦新作","play":"57.7万次播放","comment":"248次评论"},{"href":"http://v.youku.com/v_show/id_XMTY4NTM1MTYzMg==.html","imgSrc":"http://r4.ykimg.com/050E000057B3CE3667BC3D3D090937D9","title1":"《哆啦A梦》姊妹片","title2":"藤子不二雄A经典作品","play":"2.2万次播放","comment":"6次评论"},{"href":"http://v.youku.com/v_show/id_XMTY0NDY2NzYyOA==.html","imgSrc":"http://r3.ykimg.com/050E000057908CDD67BC3D0DE50071EB","title1":"猎魂","title2":"人间炼狱守望天堂","play":"43.2万次播放","comment":"319次评论"}],"message":"success"}
	_data = data.data;
createDom1();
function createDom1(){
	for(i = 0,len = _data.length;i <len;i++){
		$(".vip-ul").append("<li>"
						+"		<a>"
						+"			<img src='"+ _data[i].imgSrc +"'>"
						+"			<i class='shadow'></i>"
						+"			<i class='icon vip-free'></i>"
						+"		</a>"
						+"		<div class='vip-desc'>"
						+"			<a>"
						+"				<p title='"+ _data[i].title1 +"'>"+ _data[i].title1 +"</p>"
						+"				<p title='"+ _data[i].title2 +"'>"+ _data[i].title2 +"</p>"
						+"				<div class='hidden'>"
						+"					<span>"+ _data[i].play +"</span>"
						+"					<span>"+ _data[i].comment +"</span>"
						+"				</div>"
						+"			</a>"
						+"			<div class='btn'>"
						+"				<a class='play'>立刻播放</a>"
						+"			</div>"
						+"		</div>"
						+"	</li>");
	};
};
// 历史热播播放列表
var data = {"code":0,"data":[{"href":"http://v.youku.com/v_show/id_XMTUzOTM5MjAxNg==.html?spm=0.0.0.0.FTPUNF","imgSrc":"http://r3.ykimg.com/0516000057137FAA67BC3C6DEC02E769","jishu":"42集全","title":"欢乐颂","actor1":"刘涛","actor2":"蒋欣","bofangliang":"47.0亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTU5MDk5MjI4NA==.html","imgSrc":"http://r3.ykimg.com/05160000574E48C167BC3C368802FB10","jishu":"42集全","title":"好先生","actor1":"孙红雷","actor2":"江疏影","bofangliang":"41.5亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTU1NDc1NTY4NA==.html","imgSrc":"http://r3.ykimg.com/05160000572ADA1C67BC3C494D0BF9EA","jishu":"43集全","title":"小丈夫","actor1":"俞飞鸿","actor2":"杨玏","bofangliang":"37.5亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTI1ODc5MjU2NA==.html","imgSrc":"http://r3.ykimg.com/0516000055C043E867BC3C37A80BE16D","jishu":"58集全","title":"花千骨 TV版","actor1":"霍建华","actor2":"赵丽颖","bofangliang":"36.6亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTMzOTkzNjU0OA==.html","imgSrc":"http://r3.ykimg.com/0516000055C1D53667BC3C5B85088413","jishu":"54集全","title":"琅琊榜","actor1":"胡歌","actor2":"刘涛","bofangliang":"34.3亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTU4MTY4OTg5Mg==.html","imgSrc":"http://r3.ykimg.com/0516000057A0477A67BC3C451406F504","jishu":"45集全","title":"仙剑云之凡","actor1":"郑元畅","actor2":"韩东君","bofangliang":"28.5亿次播放 "},{"href":"http://v.youku.com/v_show/id_XODUzODAwMzg4.html","imgSrc":"http://r3.ykimg.com/0516000055BF3CD767BC3C43AA0E7704","jishu":"96集全","title":"武媚娘传奇 湖南卫视TV版","actor1":"范冰冰","actor2":"张丰毅","bofangliang":"26.6亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTMzNTA3MTU1Ng==.html","imgSrc":"http://r3.ykimg.com/0516000055C1D17467BC3C3D8B0E3B29","jishu":"44集全","title":"大汉情缘之云中歌 TV版","actor1":"杨颖","actor2":"杜淳","bofangliang":"24.8亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTM5OTM3MzE2MA==.html","imgSrc":"http://r3.ykimg.com/05160000565C092F67BC3C35F8033F87","jishu":"58集全","title":"秦时明月 TV版","actor1":"陆毅","actor2":"陈妍希","bofangliang":"24.1亿次播放 "},{"href":"http://v.youku.com/v_show/id_XNzYxNzM0MDk2.html","imgSrc":"http://r3.ykimg.com/05160000540985D767379F1162051540","jishu":"31集全","title":"使徒行者","actor1":"苗侨伟","actor2":"佘诗曼","bofangliang":"22.5亿次播放 "},{"href":"http://v.youku.com/v_show/id_XNzM0ODIyMTM2.html","imgSrc":"http://r3.ykimg.com/0516000053ABC58767379F1488056361","jishu":"52集全","title":"古剑奇谭","actor1":"杨幂","actor2":"李易峰","bofangliang":"21.0亿次播放 "},{"href":"http://v.youku.com/v_show/id_XODY4NjkyOTQ4.html","imgSrc":"http://r3.ykimg.com/0516000054A9E85167379F42B402F64F","jishu":"36集全","title":"何以笙箫默","actor1":"钟汉良","actor2":"唐嫣","bofangliang":"19.3亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTYzOTM2MDEyOA==.html","imgSrc":"http://r3.ykimg.com/0516000057833B4367BC3C62E70AC58F","jishu":"40集全","title":"致青春","actor1":"陈瑶","actor2":"顾语涵","bofangliang":"17.6亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTI5MDg4MTQ4OA==.html","imgSrc":"http://r3.ykimg.com/0516000054C5A76A67379F653B0C1773","jishu":"68集全","title":"克拉恋人 TV版","actor1":"郑智薰","actor2":"唐嫣","bofangliang":"16.7亿次播放 "},{"href":"http://v.youku.com/v_show/id_XOTQzMzA5Mzc2.html","imgSrc":"http://r3.ykimg.com/05160000553DF3CE67BC3C0F080AF5C0","jishu":"51集全","title":"特警力量 TV版","actor1":"任天野","actor2":"徐洪浩","bofangliang":"15.9亿次播放 "},{"href":"http://v.youku.com/v_show/id_XNjI1MjExNzEy.html","imgSrc":"http://r3.ykimg.com/05160000526614D5675839786104B32A","jishu":"62集全","title":"特种兵之火凤凰 TV版","actor1":"徐佳","actor2":"程愫","bofangliang":"15.3亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTY4Nzg5NTgxMg==.html","imgSrc":"http://r3.ykimg.com/05160000577CD37267BC3C599107BDEB","jishu":"更新至13","title":"任意依恋","actor1":"金宇彬","actor2":"裴秀智","bofangliang":"14.8亿次播放 "},{"href":"http://v.youku.com/v_show/id_XODI1MzY1NDc2.html","imgSrc":"http://r3.ykimg.com/051600005462D24667379F66D0024B2E","jishu":"20集全","title":"匹诺曹","actor1":"李钟硕","actor2":"朴信惠","bofangliang":"14.4亿次播放 "},{"href":"http://v.youku.com/v_show/id_XNjI0MTkxNjAw.html","imgSrc":"http://r3.ykimg.com/0516000051930CE8670C4A1ADB040B22","jishu":"50集全","title":"咱们结婚吧","actor1":"黄海波","actor2":"高圆圆","bofangliang":"14.1亿次播放 "},{"href":"http://v.youku.com/v_show/id_XNTc5NDc2NDI4.html","imgSrc":"http://r3.ykimg.com/05160000528990C56758393EC008F44B","jishu":"40集全","title":"终极一班3","actor1":"汪东城","actor2":"曾沛慈","bofangliang":"14.1亿次播放 "},{"href":"http://v.youku.com/v_show/id_XNjM3OTQ5NTg0.html","imgSrc":"http://r3.ykimg.com/05160000525378676758397B860B873A","jishu":"20集全","title":"继承者们","actor1":"李敏镐","actor2":"朴信惠","bofangliang":"14.0亿次播放 "},{"href":"http://v.youku.com/v_show/id_XODgxNTA0NjE2.html","imgSrc":"http://r3.ykimg.com/0516000054C7073667379F1CB80A42B3","jishu":"46集全","title":"千金女贼 TV版","actor1":"唐嫣","actor2":"刘恺威","bofangliang":"13.7亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTY4MjIzMjA5Mg==.html","imgSrc":"http://r3.ykimg.com/05160000578F215267BC3C304200EDC4","jishu":"更新至58","title":"终极一班4","actor1":"曾沛慈","actor2":"罗宏正","bofangliang":"13.6亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTQ3MDg4Mjk4MA==.html","imgSrc":"http://r3.ykimg.com/05160000569861D467BC3C411601597D","jishu":"50集全","title":"女医明妃传","actor1":"刘诗诗","actor2":"霍建华","bofangliang":"13.3亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTUwNjQ0NDMwMA==.html","imgSrc":"http://r3.ykimg.com/05160000570B5CDF67BC3C7DA304170F","jishu":"46集全","title":"山海经之赤影传说 TV版","actor1":"张翰","actor2":"娜扎","bofangliang":"13.2亿次播放 "},{"href":"http://v.youku.com/v_show/id_XOTQ3MTUyMDA0.html","imgSrc":"http://r3.ykimg.com/05160000553DFA4A67BC3C1DF30A01E1","jishu":"45集全","title":"虎妈猫爸","actor1":"赵薇","actor2":"佟大为","bofangliang":"12.2亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTMyNDIzMTczMg==.html","imgSrc":"http://r3.ykimg.com/051600005751351F67BC3C2CBF008574","jishu":"48集全","title":"伪装者 TV版","actor1":"胡歌","actor2":"靳东","bofangliang":"12.1亿次播放 "},{"href":"http://v.youku.com/v_show/id_XOTA0MTA3MzU2.html","imgSrc":"http://r3.ykimg.com/0516000055C07F1367BC3C34DF05EAD1","jishu":"40集全","title":"锦绣缘华丽冒险 湖南卫视TV版","actor1":"黄晓明","actor2":"陈乔恩","bofangliang":"11.9亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTQ4MTIwNTY2OA==.html","imgSrc":"http://r3.ykimg.com/0516000056C57ED167BC3C6943057F52","jishu":"66集全","title":"因为爱情有幸福 TV版","actor1":"唐艺昕","actor2":"陈伟霆","bofangliang":"11.7亿次播放 "},{"href":"http://v.youku.com/v_show/id_XMTUxOTk4NDg2MA==.html","imgSrc":"http://r3.ykimg.com/05160000519306C5670C4A1ADD0A6B46","jishu":"更新至995","title":"爱·回家","actor1":"张继聪","actor2":"黄翠如","bofangliang":"11.5亿次播放 "}],"message":"success"}
	_data = data.data;
	createDom2();
function createDom2(){
	for(i = 0,len = _data.length;i < len;i++){
		$(".hot-ul").append("<li class='hot-li'>"
							+"	<a class='hot-img' href='"+ _data[i].href +"'>"
							+"		<i class='hot-icon'></i>"
							+"		<i class='num'>"+(i+1)+"</i>"
							+"		<img src='"+ _data[i].imgSrc +"'>"
							+"		<i class='bg'></i>"
							+"		<span class='total'>"+ _data[i].jishu +"</span>"
							+"		<div class='hover'>"
							+"			<img src='../image/hot-hover-logo.png'>"
							+"		</div>"
							+"	</a>"
							+"	<ul class='info-list'>"
							+"		<li class='title'>"
							+"			<a>"+ _data[i].title +"</a>"
							+"		</li>"
							+"		<li class='actor'>"
							+"			<em>主演：</em>"
							+"			<a>"+ _data[i].actor1 +"</a>"
							+"			<a>"+ _data[i].actor2 +"</a>"
							+"		</li>"
							+"		<li>"+ _data[i].bofangliang +"</li>"
							+"	</ul>"
							+"</li>");
	};	
};
// vip 滚动
var func = function(){
	if($(".hot-li")[0].offsetLeft == 0){
		$(".hot-li").animate({left: "-440px"},900);
	}else{
		$(".hot-li").css("left","0");
		$(".hot-li").eq(0).appendTo(".hot-ul");
		$(".hot-li").eq(0).appendTo(".hot-ul");
		$(".hot-li").animate({left: "-440px"},900);
	}
};
var time = setInterval(func,2000);
$(".hot-list .hot-ul").mouseenter(function(){
	clearInterval(time);
}).mouseleave(function(){
	time = setInterval(func,2000);
});

// 不可狂击选中
$('body').bind("selectstart",function(){ return false; });