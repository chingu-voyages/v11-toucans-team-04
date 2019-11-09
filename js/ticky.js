// Intersection Observer
let section = document.querySelector('#how-it-works');
let observer = new IntersectionObserver(section => {
	let tiles = document.querySelectorAll('.feature-tile');
	if (section[0].intersectionRatio > 0) {
		tiles.forEach(tile => {
			tile.classList.add('feature-visible');
		});
	}
});

observer.observe(section);

// Transition Function
function updateTransition() {
	let animatedElements = document.querySelectorAll('.animate');
	animatedElements.forEach(animate => {
		animate.className = 'reveal-visible';
	});
	// for (let i = 0; i < animatedElements.length; i++) {
	//   animatedElements[i].className = "reveal-visible";
	// }
}

window.addEventListener('load', updateTransition);

//Formatting scroll-to-top button
var wrapper = document.getElementById('wrapper');
var upScroll = document.getElementById('top-scroll');

function handleTopScroll() {
	if (wrapper.scrollTop < 400) {
		upScroll.style.opacity = '0';
		setTimeout(function() {
			if (wrapper.scrollTop < 400) {
				upScroll.style.visibility = 'hidden';
			}
		}, 500);
	} else {
		upScroll.style.visibility = 'visible';
		upScroll.style.opacity = '1';
	}
}

wrapper.addEventListener('scroll', handleTopScroll);

// Adding smooth scrolling to anchors
function handleSmoothScroll() {
	var anchors = document.getElementsByClassName('smooth-scroll');
	Array.prototype.forEach.call(anchors, function(a) {
		var el = document.getElementById(a.href.match(/#.*$/)[0].substring(1));
		a.addEventListener('click', function(event) {
			event.preventDefault();
			el.scrollIntoView({
				behavior: 'smooth',
			});
		});
	});
}

window.addEventListener('load', handleSmoothScroll);
