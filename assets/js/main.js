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

// Gallery Carousel JavaScript for smooth click of images
let currentSlide = 0;
let isTransitioning = false;
let totalOriginalItems = 0;
let itemsPerView = 3;

function getItemsPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function setupGallery() {
    const gallery = document.getElementById('gallery-grid');
    if (!gallery) {
        console.log('Gallery grid not found');
        return;
    }
    
    // Remove any existing clones
    const existingClones = gallery.querySelectorAll('.clone');
    existingClones.forEach(clone => clone.remove());
    
    // Get original items
    const items = gallery.querySelectorAll('.gallery-item');
    totalOriginalItems = items.length;
    
    if (totalOriginalItems === 0) {
        console.log('No gallery items found');
        return;
    }
    
    itemsPerView = getItemsPerView();
    
    // Clone all items before and after for infinite scroll
    const itemsArray = Array.from(items);
    
    // Clone all items and prepend them (for going backwards)
    itemsArray.forEach(item => {
        const cloneBefore = item.cloneNode(true);
        cloneBefore.classList.add('clone', 'clone-before');
        gallery.insertBefore(cloneBefore, gallery.firstChild);
    });
    
    // Clone all items and append them (for going forwards)
    itemsArray.forEach(item => {
        const cloneAfter = item.cloneNode(true);
        cloneAfter.classList.add('clone', 'clone-after');
        gallery.appendChild(cloneAfter);
    });
    
    // Start at the first original item (after the prepended clones)
    currentSlide = totalOriginalItems;
    updateGalleryPosition(false);
}

function updateGalleryPosition(animate = true) {
    const gallery = document.getElementById('gallery-grid');
    if (!gallery) return;
    
    const items = gallery.querySelectorAll('.gallery-item');
    if (items.length === 0) return;
    
    // Calculate item width including margin
    const itemStyle = window.getComputedStyle(items[0]);
    const itemWidth = items[0].offsetWidth + parseInt(itemStyle.marginRight) + parseInt(itemStyle.marginLeft);
    
    // Calculate offset to center the current items in view
    const containerWidth = gallery.parentElement.offsetWidth;
    const totalVisibleWidth = itemWidth * itemsPerView;
    const centerOffset = (containerWidth - totalVisibleWidth) / 2;
    
    // Calculate translation
    const translateX = -(currentSlide * itemWidth) + centerOffset;
    
    // Apply transform
    gallery.style.transition = animate ? 'transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)' : 'none';
    gallery.style.transform = `translateX(${translateX}px)`;
    
    // Handle infinite scroll reset
    if (!animate) return;
    
    gallery.addEventListener('transitionend', function handleTransitionEnd() {
        gallery.removeEventListener('transitionend', handleTransitionEnd);
        
        // Reset position if we've scrolled to clones
        if (currentSlide >= totalOriginalItems * 2) {
            // We've scrolled too far right, reset to original items
            currentSlide = totalOriginalItems;
            updateGalleryPosition(false);
        } else if (currentSlide < totalOriginalItems) {
            // We've scrolled too far left, reset to original items
            currentSlide = totalOriginalItems * 2 - 1;
            updateGalleryPosition(false);
        }
        
        isTransitioning = false;
    });
}

function nextSlide() {
    if (isTransitioning || totalOriginalItems === 0) return;
    
    isTransitioning = true;
    currentSlide++;
    updateGalleryPosition(true);
}

function previousSlide() {
    if (isTransitioning || totalOriginalItems === 0) return;
    
    isTransitioning = true;
    currentSlide--;
    updateGalleryPosition(true);
}

// Auto-play functionality (optional)
let autoPlayInterval;

function startAutoPlay(interval = 4000) {
    stopAutoPlay(); // Clear any existing interval
    autoPlayInterval = setInterval(nextSlide, interval);
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}

// Initialize gallery when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('gallery-grid')) {
        setTimeout(() => {
            setupGallery();
            
            // Optional: Start auto-play
            // startAutoPlay();
            
            // Stop auto-play on hover
            const galleryContainer = document.querySelector('.gallery-container');
            if (galleryContainer) {
                galleryContainer.addEventListener('mouseenter', stopAutoPlay);
                galleryContainer.addEventListener('mouseleave', () => {
                    // Optional: Restart auto-play on mouse leave
                    // startAutoPlay();
                });
            }
        }, 100);
    }
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        const newItemsPerView = getItemsPerView();
        if (newItemsPerView !== itemsPerView) {
            setupGallery();
        }
    }, 250);
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left
            nextSlide();
        } else {
            // Swiped right
            previousSlide();
        }
    }
}

// Add touch listeners to gallery
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery-grid');
    if (gallery) {
        gallery.addEventListener('touchstart', handleTouchStart, { passive: true });
        gallery.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
});

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

// Handle form submission without redirect
document.addEventListener('DOMContentLoaded', function() {
    // Wait for other scripts to load
    setTimeout(function() {
        const form = document.querySelector('.php-email-form');
        if (!form) return;
        
        // Flag to prevent double submission
        let isSubmitting = false;
        
        // Email validation function - IMPROVED VERSION
        function isValidEmail(email) {
    // Trim whitespace
    email = email.trim();
    
    // Basic format check
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return false;
    
    // Split and validate parts
    const [localPart, domain] = email.split('@');
    if (!localPart || !domain) return false;
    
    // Domain must have at least one dot
    if (!domain.includes('.')) return false;
    
    // Get domain parts
    const domainParts = domain.split('.');
    const tld = domainParts[domainParts.length - 1];
    
    // TLD must be at least 2 characters
    if (!tld || tld.length < 2) return false;
    
    // Check for incomplete domains
    const invalidDomains = ['gma', 'out', 'hot', 'yah', 'gmail', 'yahoo', 'hotmail', 'outlook'];
    if (invalidDomains.includes(domain.toLowerCase())) return false;
    
    // Domain before TLD must have content
    const domainName = domainParts[domainParts.length - 2];
    if (!domainName || domainName.length < 2) return false;
    
    return true;
}
        
        // Override any existing submit handlers
        form.onsubmit = null;
        
        // Remove all existing event listeners by cloning
        const newForm = form.cloneNode(true);
        form.parentNode.replaceChild(newForm, form);
        
        newForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Prevent double submission
            if (isSubmitting) {
                console.log('Already submitting, blocked');
                return false;
            }
            
            const emailInput = this.querySelector('input[type="email"]');
            const errorEl = this.querySelector('.error-message');
            
            // Validate email
            if (emailInput && !isValidEmail(emailInput.value)) {
                if (errorEl) {
                    errorEl.style.display = 'block';
                    errorEl.textContent = 'Please enter a valid email address (e.g., name@example.com)';
                    
                    // Hide error after 5 seconds
                    setTimeout(() => {
                        errorEl.style.display = 'none';
                    }, 5000);
                }
                
                // Focus on email field
                emailInput.focus();
                emailInput.style.borderColor = '#dc3545';
                return false;
            }
            
            isSubmitting = true;
            console.log('Submitting form...');
            
            const loadingEl = this.querySelector('.loading');
            const sentEl = this.querySelector('.sent-message');
            
            // Show loading
            if (loadingEl) loadingEl.style.display = 'block';
            if (errorEl) errorEl.style.display = 'none';
            if (sentEl) sentEl.style.display = 'none';
            
            // Reset email field border
            if (emailInput) emailInput.style.borderColor = '';
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Submit to Web3Forms
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                if (loadingEl) loadingEl.style.display = 'none';
                
                if (result.success) {
                    // Show success message
                    if (sentEl) {
                        sentEl.style.display = 'block';
                        sentEl.textContent = 'Your message has been sent. Thank you!';
                    }
                    this.reset();
                    
                    // Hide after 5 seconds and reset flag
                    setTimeout(() => {
                        if (sentEl) sentEl.style.display = 'none';
                        isSubmitting = false;
                    }, 5000);
                } else {
                    // Show error
                    if (errorEl) {
                        errorEl.style.display = 'block';
                        errorEl.textContent = 'Failed to send message. Please try again.';
                    }
                    isSubmitting = false;
                }
            })
            .catch(error => {
                console.error('Submit error:', error);
                if (loadingEl) loadingEl.style.display = 'none';
                if (errorEl) {
                    errorEl.style.display = 'block';
                    errorEl.textContent = 'Network error. Please check your connection.';
                }
                isSubmitting = false;
            });
            
            return false;
        });
        
        // Also add real-time validation on email field
        const emailField = newForm.querySelector('input[type="email"]');
        if (emailField) {
            emailField.addEventListener('blur', function() {
                const errorEl = newForm.querySelector('.error-message');
                if (this.value && !isValidEmail(this.value)) {
                    this.style.borderColor = '#dc3545';
                    if (errorEl) {
                        errorEl.style.display = 'block';
                        errorEl.textContent = 'Please enter a valid email address (e.g., name@example.com)';
                        setTimeout(() => {
                            if (errorEl.textContent === 'Please enter a valid email address (e.g., name@example.com)') {
                                errorEl.style.display = 'none';
                            }
                        }, 5000);
                    }
                } else {
                    this.style.borderColor = '';
                    if (errorEl && errorEl.textContent === 'Please enter a valid email address (e.g., name@example.com)') {
                        errorEl.style.display = 'none';
                    }
                }
            });
            
            // Clear error on focus
            emailField.addEventListener('focus', function() {
                const errorEl = newForm.querySelector('.error-message');
                if (errorEl && errorEl.textContent === 'Please enter a valid email address (e.g., name@example.com)') {
                    errorEl.style.display = 'none';
                }
            });
        }
    }, 1000);
});