var searchIcon = document.getElementById("search-button");
    searchInput = document.getElementById("search-field");
    closeSearchInput = document.getElementById("close-search-input");
    overlay = document.getElementById("overlay");

searchIcon.onclick = function () {

    'use strict'; 
    var omitDisplayElements = document.getElementsByClassName("display"); 

    for (let i = 0 ; i < omitDisplayElements.length; i++) {

        omitDisplayElements[i].style.display = "none";
    }

    overlay.style.backgroundColor = "#fff";
    overlay.style.height = "150px";
    document.getElementById("nav-bar").style.marginTop = "-100px";

    let searchKeywords = document.getElementById("search-keywords");
    searchKeywords.style.display = "block";
    searchInput.style.display = "block";
    closeSearchInput.style.display = "block";

};


closeSearchInput.onclick = function() {

    'use strict';

    var omittedDisplay = document.getElementsByClassName("display");K

    let searchKeywords = document.getElementById("search-keywords");
    searchKeywords.style.display = "none"; 
    searchInput.style.display = "none"; 
    closeSearchInput.style.display = "none";
    overlay.style.display = "none";

    for (var i = 0; i < omittedDisplay.length; i++) {

        omittedDisplay[i].classList.remove("display");
    }

};




