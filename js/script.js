/* ===========================
   Durga Music Academy
   script.js
=========================== */

// Active menu button glow

const menuLinks = document.querySelectorAll(".sidebar a");

menuLinks.forEach(link => {

    link.addEventListener("click", function(){

        menuLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// Button click glow effect

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        this.style.boxShadow =
        "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff";

        setTimeout(() => {

            this.style.boxShadow = "";

        },1000);

    });

});


// Image animation on loading

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("load", () => {

        image.style.opacity = "1";

    });

});
