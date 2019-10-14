//SmoothScrolling Animation
function smoothScroll(target, duration) {
  let newTarget = document.querySelector(target);
  let targetPosition = newTarget.getBoundingClientRect().top + newTarget.getBoundingClientRect().left + window.scrollY;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animateScroll(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animateScroll);
  }
  requestAnimationFrame(animateScroll);

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  };
}

// Intersection Observer
let section = document.querySelector('#how-it-works');
let observer = new IntersectionObserver((section) => {
  let tiles = document.querySelectorAll('.feature-tile');
  if(section[0].intersectionRatio > 0) {
    tiles.forEach((tile) => {
      tile.classList.add('feature-visible');
    });
  }
});

observer.observe(section);

let navLinks = document.querySelectorAll('.nav-link');


// Transition Function
function updateTransition() {
  let animatedElements = document.querySelectorAll(".animate");
  for (let i = 0; i < animatedElements.length; i++) {
    animatedElements[i].className = "reveal-visible";
  }
}

window.onload = updateTransition();
window.onscroll = () => {
  console.log('Scrolling')
  let howItWorksSection = document.querySelector('#how-it-works');
  let cta = document.querySelector('.cta-button');
  if (isInView(howItWorksSection)) {
    console.log('true');
    let featureTiles = document.querySelectorAll('.feature-tile');

    for (let i = 0; i < featureTiles.length; i++) {
      featureTiles[i].classList.remove('visible');
      featureTiles[i].classList.add('reveal-visible');
    }
  }
};

//Formatting scroll-to-top button
window.onload = function() {
  var wrapper = document.getElementById("wrapper");
  var upScroll = document.getElementById("top-scroll");

  wrapper.onscroll = function() {
    var timer;
    if (wrapper.scrollTop < 400) {
      upScroll.style.opacity = "0";
      timer = setTimeout(function() {
        if (wrapper.scrollTop < 400) {
          upScroll.style.visibility = "hidden";
        }
      }, 500);
    } else {
      upScroll.style.visibility = "visible";
      upScroll.style.opacity = "1";
    }
  };

  // Adding smooth scrolling to anchors
  var anchors = document.getElementsByClassName("smooth-scroll");
  Array.prototype.forEach.call(anchors, function(a) {
    var el = document.getElementById(a.href.match(/#.*$/)[0].substring(1));
    a.addEventListener("click", function(event) {
      event.preventDefault();
      el.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
};
