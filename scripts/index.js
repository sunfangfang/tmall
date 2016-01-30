$(function(){
	$('.has-c').hover(function(){
		$(this).find('.child').show();
	},function(){
		$(this).find('.child').hide();
	});
	$('.dir-left').hover(function(){
		$(this).find('img').animate({marginLeft:'-10px'},300);
	},function(){
		$(this).find('img').animate({marginLeft:'0px'},300);
	});
	$('.show-right a').hover(function(){
		$(this).animate({marginLeft:'-10px'},300);
	},function(){
		$(this).animate({marginLeft:'0px'},300);
	});
	$('.show-long p a').hover(function(){
		$(this).animate({marginLeft:'-5px'},300);
	},function(){
		$(this).animate({marginLeft:'0px'},300);
	});

	$('.sn-nav-left a').each(function(i){
		$(this).data('index',i);
		$(this).css({background:'url(./images/nav-left-img'+(i+1)+'.png) no-repeat 5px 5px'});
	});
	$('.sn-nav-left a').hover(function(){
		var i = $(this).data('index');
		$($('.sn-nav-left a')[i]).css({background:'url(./images/nl'+i+'.png) no-repeat'});
	},function(){
		if($(this).attr('aaa')){return;};
		var i = $(this).data('index');
		$($('.sn-nav-left a')[i]).css({background:'url(./images/nav-left-img'+(i+1)+'.png) no-repeat 5px 5px'});

	})
	// ------------------------------------------
	var bgColors=['#011C31','#FCED5F','#5D6069','#04538E','#AC1119','#FAAA12','#7CF6B5','#7E6E5F','#D9070A','#D21C59','#FEC5D4','#29A6FF','#E4E2E3','#FED7D8','#30C4FF','#C9E0B2'];
	$('.cbXian').each(function(i){
		$(this).data('index',i);
	});
	$('.cbXian').hover(function(){
		var i = $(this).data('index');
		if(i==0) return;
		clearInterval(timerId);
		$('#com-img-chang').hide();
		$('#long-right').hide();
		$('.markt-slide-nav').hide();
		$('.youtu').hide();
		$( $('.img-aa')[i] ).show();
		$( $('.img-bb')[i] ).show();
		$($('.youtu')[i]).show();
		$('.main-bar').css({background:bgColors[i]});
		},function(){
			clearInterval(timerId);
			$('#com-img-chang').show();
			$('#long-right').show();
			$('.markt-slide-nav').show();
			var i = $(this).data('index');
			$( $('.img-aa')[i] ).hide();
			$( $('.img-bb')[i] ).hide();
			timerId = setInterval(lunbo,1000);
	});
	// ----------------------------------------
	var index = 0;
	var color=['#011C31','#DDDDDD','#FF8A12','#DCDCDC','#F8ECDC','#DD2726'];
	var lunbo  =  function(){
		$('#com-img-chang').show();
		$('#long-right').show();
		$('#com-img-chang').css({marginLeft:-814*index+'px'},500);
		$('#long-right').css({marginLeft:-408*index+'px'},500);
		$('.small-link').css({background:'#000'});
		$($('.small-link')[index]).css({background:'#c40000'});
		$('.main-bar').css({background:color[index]});

		index += 1;
		if( index === $('.small-link').length ){
		  index = 0;
		}
	}
	$('.small-link').each(function(i){
		$(this).data('index',i)
	});

	$('.small-link').hover(function(){
		clearInterval(timerId);
		$('.small-link').css({background:'#000'});
		$(this).css({background:'#c40000'});
		var i = $(this).data('index');
		$('#com-img-chang').css({marginLeft:-814*i+'px'},500);
		$('#long-right').css({marginLeft:-408*i+'px'},500);
		$('.main-bar').css({background:color[i]});
		index = i;
	},function(){
		clearInterval(timerId);
		timerId = setInterval(lunbo,1000);
	});
	var timerId = setInterval(lunbo,1000);
	// -------------------------------------
	var jishu1=0;
	var fn1=function(){
		$('.show1').css({marginLeft:-200*jishu1+'px'},500);
		jishu1++;
		if(jishu1==3){
			jishu1=0;
		}
	};
	var timerId1=setInterval(fn1,1000);
	$('.left1').click(function(){
		clearInterval(timerId1);
		jishu1--;
		if(jishu1==-1){
			jishu1=2;
		}
		$('.show1').css({marginLeft:-200*jishu1+'px'},500);
		timerId1=setInterval(fn1,1000);
	});
	$('.right1').click(function(){
		clearInterval(timerId1);
		jishu1++;
		if(jishu1==3){
			jishu1=0;
		}
		$('.show1').css({marginLeft:-200*jishu1+'px'},500);
		timerId1=setInterval(fn1,1000);
	});
	// -------------------------------------
	var jishu2=0;
	var fn2=function(){
		$('.show2').css({marginLeft:-200*jishu2+'px'},500);
		jishu2++;
		if(jishu2==3){
			jishu2=0;
		}
	};
	var timerId2=setInterval(fn2,1000);
	$('.left2').click(function(){
		clearInterval(timerId2);
		jishu2--;
		if(jishu2==-1){
			jishu2=2;
		}
		$('.show2').css({marginLeft:-200*jishu2+'px'},500);
		timerId2=setInterval(fn2,1000);
	});
	$('.right2').click(function(){
		clearInterval(timerId2);
		jishu2++;
		if(jishu2==3){
			jishu2=0;
		}
		$('.show2').css({marginLeft:-200*jishu2+'px'},500);
		timerId2=setInterval(fn2,1000);
	});
	// -------------------------------------
	var jishu3=0;
	var fn3=function(){
		$('.show3').css({marginLeft:-200*jishu3+'px'},500);
		jishu3++;
		if(jishu3==3){
			jishu3=0;
		}
	};
	var timerId3=setInterval(fn3,1000);
	$('.left3').click(function(){
		clearInterval(timerId3);
		jishu3--;
		if(jishu3==-1){
			jishu3=2;
		}
		$('.show3').css({marginLeft:-200*jishu3+'px'},500);
		timerId3=setInterval(fn3,1000);
	});
	$('.right3').click(function(){
		clearInterval(timerId3);
		jishu3++;
		if(jishu3==3){
			jishu3=0;
		}
		$('.show3').css({marginLeft:-200*jishu3+'px'},500);
		timerId3=setInterval(fn3,1000);
	});
	// -------------------------------------
	var jishu4=0;
	var fn4=function(){
		$('.show4').css({marginLeft:-200*jishu4+'px'},500);
		jishu4++;
		if(jishu4==3){
			jishu4=0;
		}
	};
	var timerId4=setInterval(fn4,1000);
	$('.left4').click(function(){
		clearInterval(timerId4);
		jishu4--;
		if(jishu4==-1){
			jishu4=2;
		}
		$('.show4').css({marginLeft:-200*jishu4+'px'},500);
		timerId4=setInterval(fn4,1000);
	});
	$('.right4').click(function(){
		clearInterval(timerId4);
		jishu4++;
		if(jishu4==3){
			jishu4=0;
		}
		$('.show4').css({marginLeft:-200*jishu4+'px'},500);
		timerId4=setInterval(fn4,1000);
	});
	// -------------------------------------
	var jishu5=0;
	var fn5=function(){
		$('.show5').css({marginLeft:-200*jishu5+'px'},500);
		jishu5++;
		if(jishu5==3){
			jishu5=0;
		}
	};
	var timerId5=setInterval(fn5,1000);
	$('.left5').click(function(){
		clearInterval(timerId5);
		jishu5--;
		if(jishu5==-1){
			jishu5=2;
		}
		$('.show5').css({marginLeft:-200*jishu5+'px'},500);
		timerId5=setInterval(fn5,1000);
	});
	$('.right5').click(function(){
		clearInterval(timerId5);
		jishu5++;
		if(jishu5==3){
			jishu5=0;
		}
		$('.show5').css({marginLeft:-200*jishu5+'px'},500);
		timerId5=setInterval(fn5,1000);
	});
	// -------------------------------------
	var jishu6=0;
	var fn6=function(){
		$('.show6').css({marginLeft:-200*jishu6+'px'},500);
		jishu6++;
		if(jishu6==3){
			jishu6=0;
		}
	};
	var timerId6=setInterval(fn6,1000);
	$('.left6').click(function(){
		clearInterval(timerId6);
		jishu6--;
		if(jishu6==-1){
			jishu6=2;
		}
		$('.show6').css({marginLeft:-200*jishu6+'px'},500);
		timerId6=setInterval(fn6,1000);
	});
	$('.right6').click(function(){
		clearInterval(timerId6);
		jishu6++;
		if(jishu6==3){
			jishu6=0;
		}
		$('.show6').css({marginLeft:-200*jishu6+'px'},500);
		timerId6=setInterval(fn6,1000);
	});
	$('.mid-left').on('mousedown',function(e){
		e.preventDefault();
	});
	$('.mid-right').on('mousedown',function(e){
		e.preventDefault();
	})
	
	// -------------------------------------
	$('.option').each(function(i){
		$(this).data('index',i);
	});
	$('.option').click(function(){
		var i = $(this).data('index');
		$('.opContent').hide();
		$($('.opContent')[i]).show();
	});
	// -----------------------------------------
	$('.sn-nav-left a').each(function(i){
	    $(this).data('index',i);
	});
	$('.sn-nav-left a').click(function(){
		kaiguan==false;
		var i = $(this).data('index');
		var newtop = $( $('.section1')[i] ).offset().top-100;
		$({top: $(window).scrollTop()}).animate(
			{top: newtop},
			{
				duration: 700,
				step: function() {
					$(window).scrollTop(this.top);
				}
			}
		);
	});
	$('.sn-nav-left a').on('mousedown',function(){
		// clearTimeout(time1);
		kaiguan==false;
	});
	// $('.sn-nav-left a').on('mouseup',function(){
	// 	var time1=setTimeout(function(){
	// 		kaiguan==true;
	// 	},1000) ;
	// });
	var topArr=[1094,1547,2000,2577,3030,3483,4060,4513,4966,5543,5996];
	var kaiguan=true;
	$(window).scroll(function(){
		if(kaiguan==false){return;};
		for(var i=0;i<topArr.length;i++){
			if($(window).scrollTop() >= topArr[i] && $(window).scrollTop()<=topArr[i+1]){
				$('.sn-nav-left a').removeAttr('aaa');
				$($('.sn-nav-left a')[i]).css({background:'url(./images/nl'+i+'.png) no-repeat'});
				$($('.sn-nav-left a')[i]).attr('aaa',true);
			}else{
				$($('.sn-nav-left a')[i]).css({background:'url(./images/nav-left-img'+(i+1)+'.png) no-repeat 5px 5px'});
			};
			if($(window).scrollTop() >= topArr[10])	{
				$($('.sn-nav-left a')[10]).css({background:'url(./images/nl'+10+'.png) no-repeat'});
			}
		}
	    
	});
	// ----------------------------------
	var ti;
	$(window).scroll(function(){
		if($(window).scrollTop()){
			$('#total').hide();
		}
		if($(window).scrollTop() > 1000){
			clearTimeout(ti);
			ti = setTimeout(function(){
				$('#total').show();
			},1000);
		}else{
			clearTimeout(ti);
			$('#total').hide();
		};
	});

	// --------------------------
	var snLeft;
	$(window).scroll(function(){
		if($(window).scrollTop() > 1000){
			clearTimeout(snLeft);
			snLeft = setTimeout(function(){
				$('.sn-nav-left').show();
				$('.goback').show();
			},10);
		}else{
			clearTimeout(snLeft);
			$('.sn-nav-left').hide();
			$('.goback').hide();
		};
	});

	// --------------------------
	$(".sr-ying").click(function(){
	    $({top: $(window).scrollTop()}).animate(
			{top: 0},
			{
				duration: 700,
				step: function() {
					$(window).scrollTop(this.top);
				}
			}
		);
	});
	var database=[11,12,13,14,15,16,17,18,19,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,
	201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,
	301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,
	401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424];
	$('.pinpai-logo').attr('src',function(i){
		return './images/'+database[i]+'.jpg';
	});
	$('#huanyipi').click(function(){
		var zidian={};
		$('.pinpai-logo').attr('src',function(){
			var rand=Math.floor(Math.random()*96);
			if(zidian[rand]){
				var rand=Math.floor(Math.random()*96);
			}
			zidian[rand]=true;
			return './images/'+database[rand]+'.jpg';
		});

	});

	$('.sr-xian').hover(function(){
		$('.sr-xian').stop();
			$(this).find('.sr-ying').show(0,function(){
			  $(this).animate({left:-90},200);
		});
		},function(){
			$('.sr-xian').stop();
			$(this).find('.sr-ying').css({left:-120}).hide(0);
	});	
});
