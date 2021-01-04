var images = document.querySelectorAll("#popular-items .row .card img ");


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

