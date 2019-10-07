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

  // const scrollToTop = () => {
  //   const c = document.documentElement.scrollTop || document.body.scrollTop;
  //   if (c > 0) {
  //     window.requestAnimationFrame(scrollToTop);
  //     window.scrollTo(0, c - c / 8);
  //   }
  // };

  // upScroll.onclick = function () {
  //   scrollToTop();
  // }
}