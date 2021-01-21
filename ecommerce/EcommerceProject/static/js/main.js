var images = document.querySelectorAll("#popular-items .row .card img");
    scrollButton = document.getElementsByClassName("no-scroll");

// Display the "Add to cart caption" on hover 
for (let i = 0 ; i < images.length; i++) {

    images[i].addEventListener("mouseover", function () {

        'use strict';
        this.style.border = "none";

        var sibling = this.nextSibling; 
        var notFound = true;

        while (notFound) {

            if (sibling.nodeType != Node.TEXT_NODE ) 

                notFound = false;

            else 

            sibling = sibling.nextSibling;
        }

        if (sibling.classList.contains("image-caption")) 

            sibling.style.visibility = "visible";
    });
}


// Set actions when we remove the cursor over the image 

for (let i = 0; i < images.length; i++) {

    images[i].addEventListener("mouseleave", function () {

        'use strict';
        this.style.borderBottom = "3px solid red";

        var sibling = this.nextSibling; 
        var notFound = true;

        while (notFound) {

            if (sibling.nodeType != Node.TEXT_NODE ) 

                notFound = false;

            else 

            sibling = sibling.nextSibling;
        }

        if (sibling.classList.contains("image-caption")) 

            sibling.style.visibility = "hidden";

    });
}

// display the scroll-up button while scrolling
document.addEventListener("scroll", function() {

    'use strict'; 

    if (window.scrollY > 200) {

        scrollButton[0].classList.add("scroll");
    }

    else {

        scrollButton[0].classList.remove("scroll");
    }
    
});

// Go to top after clicking the button 
scrollButton[0].addEventListener("click", function() {

    'use strict'; 
    var coordY = window.scrollY;
    
    setInterval(function() {

        if (coordY > 0) {

        coordY = coordY - 10; 
        window.scrollTo(0, coordY);
        
        }

    }, 10);

})
