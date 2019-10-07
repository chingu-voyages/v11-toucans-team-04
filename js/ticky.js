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

// ViewPort Helper Function
function isInView(elem) {
  let boundingBox = elem.getBoundingClientRect();
  return (boundingBox.top >= 0);
};

// Transition Function
function updateTransition() {
  let animatedElements = document.querySelectorAll('.animate');
  for (let i = 0; i < animatedElements.length; i++) {
    animatedElements[i].className = 'reveal-visible';
  }
};

let navLinks = document.querySelectorAll('.nav-link');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function (e) {
    let section = '';
    switch (navLinks[i].text) {
      case 'Home':
        section = '#home';
        break;
      case 'About':
        section = '#about';
        break;
      case 'Features':
        section = '#how-it-works';
        break;
      case 'Add to Slack':
        section = '#cta';
        break;
      default:
        section = '#home';
        break;
    }
    smoothScroll(section, 3000);
  });
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
window.onload = function () {
  var wrapper = document.getElementById("wrapper");
  var upScroll = document.getElementById("top-scroll");

  wrapper.onscroll = function () {

    var timer;
    if (wrapper.scrollTop < 400) {
      upScroll.style.opacity = "0";
      timer = setTimeout(function () {
        if (wrapper.scrollTop < 400) {
          upScroll.style.visibility = "hidden";
        }
      }, 500)
    } else {
      upScroll.style.visibility = "visible";
      upScroll.style.opacity = "1";
    }
  }

  // Adding smooth scrolling to anchors
  var anchors = document.getElementsByClassName("smooth-scroll")
  Array.prototype.forEach.call(anchors, function (a) {
    var el = document.getElementById(a.href.match(/#.*$/)[0].substring(1));
    a.addEventListener("click", function (event) {
      event.preventDefault();
      el.scrollIntoView({
        behavior: "smooth"
      });
    })
  })
}