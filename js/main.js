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
			if(index == 2){
				$('.photo').animate({'left': 0},1000);
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

	// 그래픽디자인 영역 효과

	var filtered = false;
	$('.design_list li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
	$('.design_item_wrap').slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 4,
	});

	var filtered = false;
$('.filter-btn').on('click',function(){
    var filter = $(this).data('attribute');
    if(filter=='all'){
        $('.employees').slick('slickUnfilter');
    }else{
        $('.employees').slick('slickUnfilter').slick('slickFilter','.'+filter);
    }
    $(this).addClass('active');
    filtered = true;
});   






	$('.design_item').hover(function(){
		$(this).find('.item_cover').stop().fadeIn(300);
		$(this).find('.txt_area').addClass('on');
	}, function(){
		$(this).find('.item_cover').stop().fadeOut(300);
		$(this).find('.txt_area').removeClass('on');
	});
	$('.design_item').click(function(){
		$('.modal,.cover').fadeIn();
	});


	// 컨택 영역 효과
	// $('label').focus(function(){
	// 	$(this).parent().attr('type','checked');
	// });


	// $('.textarea').focusout(function(){
	// 	$(this).removeClass('on');
	// });
	// $('input').keydown(function(){
	// 	$(this).parent().addClass('on');
	// })

});

