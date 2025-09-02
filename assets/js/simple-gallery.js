// 内容来自 knightnemo/knightnemo.github.io/assets/js/simple-gallery.js
document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.simple-gallery');
  if (!gallery) return;

  const items = gallery.querySelectorAll('.gallery-item');
  const prevBtns = gallery.querySelectorAll('.gallery-btn.prev');
  const nextBtns = gallery.querySelectorAll('.gallery-btn.next');
  const dots = gallery.querySelectorAll('.gallery-dot');

  if (!items.length || !prevBtns.length || !nextBtns.length) return;

  let currentIndex = 0;
  let isTransitioning = false; 

  updateGallery();

  prevBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (isTransitioning) return;
      navigateSlide(-1);
    });
  });

  nextBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (isTransitioning) return;
      navigateSlide(1);
    });
  });

  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      if (isTransitioning) return;
      const index = parseInt(this.getAttribute('data-index'));
      if (currentIndex !== index) {
        currentIndex = index;
        updateGallery();
      }
    });
  });

  document.addEventListener('keydown', function(e) {
    if (isTransitioning) return;

    const details = gallery.closest('details');
    if (details && !details.open) return;

    if (e.key === 'ArrowLeft') {
      navigateSlide(-1);
    } else if (e.key === 'ArrowRight') {
      navigateSlide(1);
    }
  });

  function updateGallery() {
    isTransitioning = true;

    const activeItem = gallery.querySelector('.gallery-item.active');
    if (activeItem) {
      activeItem.style.opacity = '0';

      setTimeout(() => {
        items.forEach((item, index) => {
          if (index === currentIndex) {
            item.classList.add('active');
            item.style.opacity = '0';

            setTimeout(() => {
              item.style.opacity = '1';
            }, 50);
          } else {
            item.classList.remove('active');
          }
        });

        dots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });

        setTimeout(() => {
          isTransitioning = false;
        }, 300);
      }, 300);
    } else {
      items.forEach((item, index) => {
        if (index === currentIndex) {
          item.classList.add('active');
          item.style.opacity = '1';
        } else {
          item.classList.remove('active');
        }
      });

      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });

      isTransitioning = false;
    }
  }

  function navigateSlide(direction) {
    currentIndex = (currentIndex + direction + items.length) % items.length;
    updateGallery();
  }

  let touchStartX = 0;
  let touchEndX = 0;

  gallery.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  gallery.addEventListener('touchend', function(e) {
    if (isTransitioning) return;

    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
      navigateSlide(1);
    }
    else if (touchEndX - touchStartX > 50) {
      navigateSlide(-1);
    }
  }
});
