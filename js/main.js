 let position = 0;
 const slidesToShow = 2;
 const slidesToScroll = 2;
 const container = document.querySelector('.slider-container');
 const track = document.querySelector('.slider-track');
 //  const item = document.querySelector('.slider-item');
 const btnPrev = document.querySelector('.btn-prev');
 const btnNext = document.querySelector('.btn-next');
 const items = document.querySelectorAll('.slider-item');
 const itemsCount = items.length;
 const itemWidth = container.clientWidth / slidesToShow;
 const movePosition = slidesToScroll * itemWidth;

 items.forEach((item) => {
   item.style.minWidth = `${itemWidth}px`;
 });

 btnNext.addEventListener('click', () => {
   const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
   position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
   setPosition();
   chechBtns();
 });

 btnPrev.addEventListener('click', () => {
   const itemLeft = Math.abs(position) / itemWidth;
   position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
   setPosition();
   chechBtns();

 });

 const setPosition = () => {
   track.style.transform = `translateX(${position}px)`;
 };
 const chechBtns = () => {
   btnPrev.disabled = position === 0;
   btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;

 };
 chechBtns();