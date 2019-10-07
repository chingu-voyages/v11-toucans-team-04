//SmoothScrolling Animation
function smoothScroll(target, duration) {
    let newTarget = document.querySelector(target);
    let targetPosition = newTarget.getBoundingClientRect().top + newTarget.getBoundingClientRect().left + window.scrollY;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animateScroll(currentTime) {
      if(startTime === null) {
          startTime = currentTime;
          }
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if(timeElapsed < duration) requestAnimationFrame(animateScroll);
      }
      requestAnimationFrame(animateScroll);

    function ease(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t + 2) + b;
      };
}

let navLinks = document.querySelectorAll('.nav-link');

for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e){
      let section = '';
      switch(navLinks[i].text) {
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

function updateTransition() {
    let animatedElements = document.querySelectorAll('.visible');
    for(let i = 0; i < animatedElements.length; i++) {
        animatedElements[i].className = 'reveal-visible';
    }
};

window.onload = updateTransition();