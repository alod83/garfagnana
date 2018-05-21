function myFunction() {
    
    var x = document.getElementById("myNavbarSmall");
    if (x.className === "navbarSmall") {
        x.className += " responsive";
                
    } else {
        x.className = "navbarSmall";

    }
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myNavbar").style.top = "0";
    } else {
        document.getElementById("myNavbar").style.top = "-50px";
   }
}






