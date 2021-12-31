$(function(){
    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: false,
        sectionsColor: ['#FFF', '#F2F2F2', '#fff', '#d4d4d4 ', '#fff'],
		anchors: ['HOME', 'ABOUT', 'GRAPHIC DESIGN', 'PUBLISHING', 'CONTACT'],
		navigation: true,
		navigationPosition: 'left',
		afterLoad: function(anchorLink, index){
			// console.log("현재 섹션 = " + index);
			if(index == 2){
				$('.photo').animate({'left': 0},1000);
			};
			if(index == 3){
				$('.cover,.modal').fadeIn();
			}
			if(index == 4){
				$('.cover,.modal').fadeIn();
			}
		},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			console.log('현재 슬라이드 번호 =' + slideIndex);
		},
	});

	// 전체메뉴 효과
		let num = 0;
		$('.m_btn').click(function(){
			if(num == 0){
				$('.line').addClass('on');
				$('.allmenu_wrap').stop().animate({'right':'-60%'},1000);
				$('.allmenu_wrap ul li').click(function(){
					$('.line').removeClass('on');
					$('.allmenu_wrap').stop().animate({'right':'-100%'},1000);
					num = 0;
				});
				num = 1;
			}else if(num == 1){
				$('.line').removeClass('on');
				$('.allmenu_wrap').stop().animate({'right':'-100%'},1000);
				num = 0;
			}
		});
	$('.allmenu_wrap').mouseleave(function(){
		$('.line').removeClass('on');
		$(this).stop().animate({'right':'-100%'},1000);
		num = 0;
	});
	$('.allmenu_wrap ul li').hover(function(){
		$(this).addClass('on');
	}, function(){
		$(this).removeClass('on');
	});

	// 홈 > 바로가기 링크 효과
	let shrt = $('#fullpage .home .txt div');
	shrt.hover(function(){
		$(this).children().css({'color':'#9a54d6'});
		$(this).find('.shrt_arrow').addClass('on');
	}, function(){
		$(this).children().css({'color':'#333'});
		$(this).find('.shrt_arrow').removeClass('on');
	});

	// 모달 영역 효과
	$('.modal_close').click(function(){
		$('.modal,.cover').fadeOut();
	});


});

