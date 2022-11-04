$(function(){
  var $menu = $('#side-nav .side-menu ul li a'),
      $contents = $('#page .scroll');

  $menu.click(function(e){
    e.preventDefault();
    var idx = $(this).parents().index();
    // console.log(idx);
    var section = $contents.eq(idx);
    var sectionDistance = section.offset().top;

    console.log(sectionDistance);
    // a.scrollTop() 스크롤양 확인
    $('html,body').stop().animate({scrollTop:sectionDistance}, 800);
  });

  // 윈도우 스크롤이 생기면
  // $contents마다 할 일- 각각의 화면 상단에서의 거리 sectionDistance 보다 스크롤양이 많은지 적은지
  // 많다는 조건이 참이면 각 요소마다 순번 변수명 idx 저장 그 순번에 해당하는 메뉴에만 클래스명 on추가

  $(window).scroll(function(){
    $contents.each(function(){
      if($(this).offset().top <= $(window).scrollTop
      ()){
        var idx = $(this).index();
        $menu.removeClass('on');
        $menu.eq(idx).addClass('on');
      }
    });
  });
});