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
var btns = document.querySelectorAll(".countryButton")
var deleteBtn = document.querySelector(".btn-danger")
var coutrySections = document.querySelectorAll(".countrySection")


deleteBtn.addEventListener('click', () => {
    for (x = 0; x < coutrySections.length; x++) {
        coutrySections[x].style.display = 'none'
    }
})

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        for (x = 0; x < coutrySections.length; x++) {
            coutrySections[x].style.display = 'none'
        }
        document.querySelector("." + btn.innerText).style.display = "block"
    })
})






