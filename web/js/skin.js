const head = document.querySelector('#header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 50) {
    head.classList.add("not-at-top")
  } else {
    head.classList.remove("not-at-top");
  }
});



(function() {
  // Page Ready

  // Alert Button
  const alertButton = document.querySelector(".close-alert");
  const alertContainer = document.querySelector(".alert");

  if(alertButton) {
    alertButton.addEventListener("click", () => {
      alertContainer.style.display = "none";
    });
  }

  // Mobile Nav
  const mobileMenu = document.querySelectorAll(".mobile-menu .expandable > a span");
  function mobileExpand(event) {
    parentEl = this.closest('.expandable');
    parentEl.classList.toggle("expanded");
    
    event.preventDefault();
    return false;
  }

  if(mobileMenu) {
    mobileMenu.forEach(function(clickedItem) {
      clickedItem.addEventListener('click', mobileExpand, false);
      clickedItem.addEventListener('touchend', mobileExpand, false);
    });
  }
})();