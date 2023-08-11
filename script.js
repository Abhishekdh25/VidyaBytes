$(document).ready(function() {
  const cardsContainer = $(".cards");
  const numVisibleCards = 2;
  const cardWidth = 150; // Fixed width for the cards
  const cardHeight = 150; // Fixed height for the cards
  let currentIndex = 0;

  $(".card").css({
    width: cardWidth + "px",
    height: cardHeight + "px",
  });

  $(".slider-container").swipe({
    swipeLeft: function() {
      if (currentIndex < cardsContainer.children().length - numVisibleCards) {
        currentIndex++;
        updateSliderPosition();
      }
    },
    swipeRight: function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      }
    },
    preventDefaultEvents: false,
  });

  function updateSliderPosition() {
    const offset = -currentIndex * cardWidth;
    cardsContainer.css("transform", `translateX(${offset}px)`);
  }
});
