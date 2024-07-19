/*

1- create the design
    1.1 - create 5 buttons
    1.2 - create empty div/container to optain the info for every coutry
2- create logic
    2.1 - create variables to select the div/container sub-tags
    2.2 - create a function for every button got press
    2.3 - every specific function for every button to change in the body of HTML
    2.4 - create a function for remove coutry button that return the div/ container tags into intialize form
3- add some style to the buttons to match country flags

*/

// variables to select tags
var heading = document.querySelector(".contentHeading");
var paragraph = document.querySelector(".contentParagraph");
var image = document.querySelector(".contentImage");
var themeColor = document.querySelector(".ContentSection");

// showing egypt information when pressing egypt
function countryInfo(title, paragraphText, imgDistination, themeColorcode) {
    themeColor.style.backgroundColor = themeColorcode
    heading.innerHTML = title
    paragraph.innerHTML = paragraphText
    image.src = imgDistination
}






