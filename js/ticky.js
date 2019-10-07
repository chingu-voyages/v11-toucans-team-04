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