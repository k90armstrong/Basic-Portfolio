window.addEventListener("scroll", function () {
    var scrollY = document.body.scrollTop;
    // check if larger than height of the top bar
    if (scrollY >= 40) {
        document.getElementById("main-header").className = 'main-header rotate fix'  // if it is larger than add the class to flip and move the header
        // document.getElementById("main-header").style.top = "120px";
        // document.getElementById("main-header").style.left = "-290px";
        // document.getElementById("main-header").style.transform = "rotate(-90deg)";
        // document.getElementById("main-header").style.position = "fixed";
    } else {
        document.getElementById("main-header").className = 'main-header' // if it is not remove the class to flip it
        // document.getElementById("main-header").style.top = "10px";
        // document.getElementById("main-header").style.left = "0px";
        // document.getElementById("main-header").style.transform = "";
    }

})