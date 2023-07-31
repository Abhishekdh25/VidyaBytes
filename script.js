$(document).ready(function() {
    const cardsContainer = $(".cards");
    const numVisibleCards = 2;
    let currentIndex = 0;
    let cardWidth;
  
    // Function to recalculate card width on window resize
    function recalculateCardWidth() {
      const sliderContainerWidth = $(".slider-container").width();
      cardWidth = sliderContainerWidth / numVisibleCards;
      $(".card").width(cardWidth);
    }
  
    // Call the recalculateCardWidth function on document ready and window resize
    recalculateCardWidth();
    $(window).on("resize", recalculateCardWidth);
  
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
