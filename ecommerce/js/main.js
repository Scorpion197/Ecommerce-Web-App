var images = document.querySelectorAll("#popular-items .row .card img ");

// Display the "Add to cart caption" on hover 

for (var i = 0 ; i < images.length; i++) {

    images[i].addEventListener("mouseover", function () {

        'use strict';
        this.style.border = "none";

    })
}


// Set actions when we remove the cursor over the image 

for (var i = 0; i < images.length; i++) {

    images[i].addEventListener("mouseleave", function () {

        'use strict';
        this.style.borderBottom = "3px solid red";

    });
}

