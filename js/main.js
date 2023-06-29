
$('.slider__inner').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 5000,
  centerMode: true,
  variableWidth: true
});
      

// VIDEO

window.addEventListener('DOMContentLoaded', function(){
  const video = document.querySelector('.video__play')


  video.addEventListener('click', function(){
    if(video.classList.contains('ready')) {
      return;
    }

    video.classList.add('ready')

    video.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/7bYU3KmFuwk?autoplay=1"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> ')
  })
})