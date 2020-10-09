const navbarIcons = document.querySelector(".nav-bar-icons");
const hamburgerIcon = document.querySelector(".icon-hamburger");
const closeIcon = document.querySelector(".icon-close");
const navmenu = document.querySelector(".navmenu");
const slideBefore= document.querySelector("#before"); 
const slideAfter= document.querySelector("#after"); 
const headingRightHeader = document.querySelector("#heading");
const contentRightHeader = document.querySelector("#content");

const xxx = document.querySelector(".desktop-image-hero");
var windowSize = "";

// Navigation Bar 
var clicked = false;


navbarIcons.addEventListener("click", function(){
    clicked = !clicked;

    if(clicked){
        hamburgerIcon.style.display = "none";
        closeIcon.style.display = "block";
        navmenu.classList.add("navmenu-active");
        
    } else{
        hamburgerIcon.style.display = "block";
        closeIcon.style.display = "none";
        navmenu.classList.remove("navmenu-active");
    }

});


window.addEventListener('resize', function(){

    if (window.innerWidth <= 860) {
        hamburgerIcon.style.display="block";
        closeIcon.style.display="none";
        windowSize = true;
    }
    else{
        hamburgerIcon.style.display="none";
        closeIcon.style.display="none";
        windowSize = false;
    }
});


// Control Slides
const listOfLeftImagesDesktop = ["desktop-image-hero-1.jpg","desktop-image-hero-2.jpg","desktop-image-hero-3.jpg"];
const listOfLeftImagesMobile = ["mobile-image-hero-1.jpg","mobile-image-hero-2.jpg","mobile-image-hero-3.jpg"];
const listOfHeadingRight=["Discover innovative ways to decorate","We are available all across the globe","Manufactured with the best materials"];
const listOfContentRight=[
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
]
var number = 0

slideBefore.addEventListener("click", function(){
    changeSlide(-1);
});
slideAfter.addEventListener("click", function(){
    changeSlide(1);
});

function changeSlide(sen){
    number = number + sen;
    if (number < 0){
        number = listOfLeftImagesDesktop.length-1;
    } 
    if(number > listOfLeftImagesDesktop.length-1){
        number = 0;
    }
    if (windowSize){
        document.querySelector(".mobile-image-hero").setAttribute('src', `images/${listOfLeftImagesMobile[number]}`);
    } else {
        document.querySelector(".desktop-image-hero").setAttribute('src', `images/${listOfLeftImagesDesktop[number]}`);
    }
    headingRightHeader.innerHTML=listOfHeadingRight[number];
    contentRightHeader.innerHTML=listOfContentRight[number];
    
}
