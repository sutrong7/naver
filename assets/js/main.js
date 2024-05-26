$(function () {
  $('.followSlide').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    draggable: false,
    prevArrow: $('.six-column .btn-slick-prev'), // 이전 화살표 모양 설정
    nextArrow: $('.six-column .btn-slick-next'), // 다음 화살표 모양 설정
  })

  $('.carSlide').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    prevArrow: $('.three-column .btn-slick-prev'), // 이전 화살표 모양 설정
    nextArrow: $('.three-column .btn-slick-next'), // 다음 화살표 모양 설정
  })

  $('.menuSlide').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    prevArrow: $('.account-menu .btn-slick-prev'), // 이전 화살표 모양 설정
    nextArrow: $('.account-menu .btn-slick-next'), // 다음 화살표 모양 설정
  })

  $('.stockSlide').slick({
    dots: false,
    autoplay: true,
    autoPlaySpeed: 3000,
    infinite: true,
    arrows: false,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  })

  $('.btn-tip').click(function () {
    let box = $(this).next('.tip-box')
    let ariaPressed = $(this).attr('aria-pressed') === 'true' ? 'false' : 'true'
    $(this).attr('aria-pressed', ariaPressed)
  })

  $('.btn-tipClose').click(function () {
    let parentBtn = $('.btn-tip')
    let ariaPressed = parentBtn.attr('aria-pressed') === 'true' ? 'false' : 'true'
    parentBtn.attr('aria-pressed', ariaPressed)
  })
})
