window.addEventListener("scroll", function () {
    var scrollY = document.body.scrollTop;
    // check if larger than height of the top bar
    if (scrollY >= 40) {
        document.getElementById("main-header").className = 'main-header rotate fix'  // if it is larger than add the class to flip and move the header
    } else {
        document.getElementById("main-header").className = 'main-header' // if it is not remove the class to flip it
    }
})