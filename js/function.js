$(function(){

  //nav 구간
  const $gnbmnu = $('.gnb>li');
  const $sub = $gnbmnu.children('.sub');

  let mnuIdx = null;

  $gnbmnu.hover(
    function(){
      mnuIdx = $gnbmnu.index(this);
      $sub.eq(mnuIdx).fadeIn(100);
    }
    ,function(){
      $sub.hide();
    }
  )

  const $navset = $('nav').offset();
  
  $(window).scroll(function(){
    if($(document).scrollTop()>$navset.top){
      $('nav').addClass('navFix');
      $('header > nav > .gnb').css({
        justifyContent:'spaceAround', 
        width: '100%',
        fontSize: 20
      });
      $gnbmnu.css({
        width: 'initial'
      });
      $('.submnu_1 > .sub_container').css({
        paddingLeft: 120
      });
      $('.submnu_2 > .sub_container').css({
        paddingLeft: 360
      });
      $('.submnu_3 > .sub_container').css({
        paddingLeft: 500
      });
      $('.submnu_4 > .sub_container').css({
        paddingLeft: 920
      });
      $('.submnu_5 > .sub_container').css({
        paddingLeft: 1230
      });
      $('.submnu_6 > .sub_container').css({
        paddingLeft: 1510
      });
    }else {
      $('nav').removeClass('navFix');
      $('header > nav > .gnb').removeAttr("style");
      $('.sub_container').removeAttr("style");
    };
  });
  
  
  // 슬라이드 구간

  const $indicator = $('.slides > .slides-pagination > li > a');
	const $container = $('.slides > .slides-container');
	const $btnPrev = $('.prev');
	const $btnNext = $('.next');

  let intervalKey = null;

	let nowIdx = 0;

	$indicator.on('click', function(evt) {
		evt.preventDefault();

		nowIdx = $indicator.index(this);


		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		$container.stop().animate({
			left: -1200 * (nowIdx + 8)
		});
	});

  //다음버튼

  $btnNext.on('click', function(evt) {
		evt.preventDefault();

		if (nowIdx < 7) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}

		console.log('nowIdx =', nowIdx);

    //활성화
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

    //가로 치수만큼 이동
		$container.stop().animate({
			left: -1200 * 9
		}, 400, function() {
      //맨 앞 한장이 맨 뒤로
			$('.slides > .slides-container > p:first-child').appendTo($container);
			$container.css({ left: -1200 * 8 });
		});
	});

  //이전버튼

  $btnPrev.on('click', function(evt) {
		evt.preventDefault();

		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 7;
		}

		console.log('nowIdx =', nowIdx);

		//활성화표시
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//컨테이너 이동
		$container.stop().animate({
			left: -1200 * 7
		}, 400, function() {
			//맨 뒤의 한장을 맨앞으로 이동
			$('.slides > .slides-container > p:last-child').prependTo($container);
			$container.css({ left: -1200 * 8 });
		});
	});

});

//exlist 부문

$(function(){
  
  const $exhibitList = $('.exlist > .exhibition_list');
  const $exSlide = $exhibitList.children('p');
  const $exPrev = $('.exprev');
  const $exNext = $('.exnext');
  const $exhScript = $('.exh_script > li');

  $exhScript.children('ol').find('li > a').on('click',function(evt){
    evt.preventDefault();
  })

  let exIdx = 2;

  let lock = false;

  $exhScript.removeClass('on').eq(exIdx).addClass('on');

  $exNext.on('click', function(evt){
    evt.preventDefault();

    if(lock===false){
        lock = true;

      if(exIdx<5){
        exIdx++;
      }else{
        exIdx = 0;
      }

      $exSlide.removeClass('on').eq(exIdx).addClass('on');

      $exhibitList.stop().animate({left: -800},function(){
        $('.exlist > .exhibition_list > p').first().appendTo($exhibitList);

        $exhibitList.css({
          left:-400
        });

        lock = false;
      });
      
      $exhScript.eq(exIdx).addClass('on').siblings().removeClass('on');
      $exhScript.eq(exIdx).fadeIn(500).siblings().fadeOut(500);
    }
  });

  $exPrev.on('click', function(evt){
    evt.preventDefault();

    if(lock===false){
      lock = true;

      if(exIdx>0){
        exIdx--;
      }else {
        exIdx = 5;
      }

      //활성화
      $exSlide.removeClass('on').eq(exIdx).addClass('on');

      $exhibitList.stop().animate({left: 0},function(){
        $('.exlist > .exhibition_list > p').last().prependTo($exhibitList);

        $exhibitList.css({
          left:-400
        });

        lock = false;
      });

      $exhScript.eq(exIdx).addClass('on').siblings().removeClass('on');
      $exhScript.eq(exIdx).fadeIn(500).siblings().fadeOut(500);
    }
  });

  $('.search_icon').on('click',function(evt){
    evt.preventDefault();
  });


});