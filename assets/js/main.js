/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();


// Gallery carousel functionality - smooth infinite loop
let currentSlide = 0;
let isTransitioning = false;

function getItemsPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function setupGallery() {
    const gallery = document.getElementById('gallery-grid');
    if (!gallery) return;
    
    // Clone first and last few items for infinite loop effect
    const items = gallery.querySelectorAll('.gallery-item');
    const itemsPerView = getItemsPerView();
    
    // Clear any existing clones
    gallery.querySelectorAll('.clone').forEach(clone => clone.remove());
    
    // Clone last items to beginning
    for (let i = items.length - itemsPerView; i < items.length; i++) {
        const clone = items[i].cloneNode(true);
        clone.classList.add('clone');
        gallery.insertBefore(clone, items[0]);
    }
    
    // Clone first items to end
    for (let i = 0; i < itemsPerView; i++) {
        const clone = items[i].cloneNode(true);
        clone.classList.add('clone');
        gallery.appendChild(clone);
    }
    
    // Start at the first real item (after clones)
    currentSlide = itemsPerView;
    updateGalleryPosition(false);
}

function updateGalleryPosition(animate = true) {
    const gallery = document.getElementById('gallery-grid');
    if (!gallery) return;
    
    const itemWidth = gallery.children[0].offsetWidth + 20; // width + gap
    const translateX = -(currentSlide * itemWidth);
    
    if (animate) {
        gallery.style.transition = 'transform 0.5s ease';
    } else {
        gallery.style.transition = 'none';
    }
    
    gallery.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const gallery = document.getElementById('gallery-grid');
    const totalItems = gallery.querySelectorAll('.gallery-item:not(.clone)').length;
    const itemsPerView = getItemsPerView();
    
    currentSlide++;
    updateGalleryPosition(true);
    
    // Check if we've reached the cloned items at the end
    if (currentSlide >= totalItems + itemsPerView) {
        setTimeout(() => {
            currentSlide = itemsPerView;
            updateGalleryPosition(false);
            isTransitioning = false;
        }, 500);
    } else {
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }
}

function previousSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const gallery = document.getElementById('gallery-grid');
    const totalItems = gallery.querySelectorAll('.gallery-item:not(.clone)').length;
    const itemsPerView = getItemsPerView();
    
    currentSlide--;
    updateGalleryPosition(true);
    
    // Check if we've reached the cloned items at the beginning
    if (currentSlide < itemsPerView) {
        setTimeout(() => {
            currentSlide = totalItems + itemsPerView - 1;
            updateGalleryPosition(false);
            isTransitioning = false;
        }, 500);
    } else {
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }
}

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        setupGallery();
    }, 250);
});

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('gallery-grid')) {
        setTimeout(() => {
            setupGallery();
        }, 100);
    }
});

// Add touch/swipe functionality for mobile
let startX = 0;
let endX = 0;

document.addEventListener('touchstart', e => {
    startX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    endX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    if (startX - endX > swipeThreshold) {
        nextSlide();
    }
    if (endX - startX > swipeThreshold) {
        previousSlide();
    }
}

// Ensure about section alignment
window.addEventListener('load', function() {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const img = aboutSection.querySelector('img');
        const content = aboutSection.querySelector('.content');
        
        if (window.innerWidth >= 992 && img && content) {
            // Set equal heights for desktop view
            const imgHeight = img.offsetHeight;
            content.style.minHeight = imgHeight + 'px';
        }
    }
});

// Re-align on window resize
window.addEventListener('resize', function() {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const content = aboutSection.querySelector('.content');
        
        if (content) {
            if (window.innerWidth < 992) {
                content.style.minHeight = 'auto';
            } else {
                const img = aboutSection.querySelector('img');
                if (img) {
                    const imgHeight = img.offsetHeight;
                    content.style.minHeight = imgHeight + 'px';
                }
            }
        }
    }
});