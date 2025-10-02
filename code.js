var state = false;
function toggleMenu() {
    if (state == false) {
        document.getElementById("pannello").style.display = "flex";
        state = true;
    } else {
        document.getElementById("pannello").style.display = "none";
        state = false;
    }
}

function closeMenu() {
    if(state == true) {
        toggleMenu();
    }
}

function home() {
    window.location.href = "index.html";
}
    

var topbutton = document.getElementById("topButton");

window.onscroll = function() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

