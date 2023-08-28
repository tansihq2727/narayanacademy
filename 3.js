function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
        // New code to handle the scroll event and make the navbar visible when scrolling down
        const navbar = document.querySelector('.topnav');

    window.onscroll = () => {
      if (window.pageYOffset > 50) {
        navbar.classList.add('fixed-navbar');
      } else {
        navbar.classList.remove('fixed-navbar');
      }
    };
}

  // Smooth Scroll Effect
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Rise-up Popup Effect for all headings
  const targets = document.querySelectorAll('.rise-up');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  targets.forEach(target => {
    observer.observe(target);
  });

  // Toggle Why Choose Us content
  function toggleReason(reason) {
    const content = reason.querySelector('.reason-content');
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }
  // Open the lightbox with the clicked image
function openLightbox(item) {
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const imageUrl = item.querySelector('img').src;

  lightboxImage.src = imageUrl;
  lightbox.style.display = 'flex';
}

// Close the lightbox when the close button is clicked or when clicking outside the image
function closeLightbox() {
  const lightbox = document.querySelector('.lightbox');
  lightbox.style.display = 'none';
}