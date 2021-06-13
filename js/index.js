// ! the like button
let likeBtns = document.querySelectorAll(".save-btn");

for (i of likeBtns) {
    i.addEventListener('click', function () {
        if (this.style.color !== "red") {
            this.style.color = "red";
        }
        else {
            this.style.color = "var(--main-color6-inactive)";
        }
    });
};

// ! filter form varibles
const filter3 = document.querySelector(".filter3");
filter3.addEventListener("click", toggleOption);

function toggleOption() {
    const filter2 = document.getElementById("filter2");
    const moreOption = document.getElementById("more-option");
    const lessOption = document.getElementById("less-option");

    if (moreOption.style.display === "block") {
        moreOption.style.display = "none";
        lessOption.style.display = "block";
        filter2.style.display = "flex";
    } else {
        moreOption.style.display = "block";
        lessOption.style.display = "none";
        filter2.style.display = "none";
    }
}

// ! the post image slider
// the varibles of the image slider
const image = document.getElementById("ad-pic");
const imageNumber = document.getElementById("image-number");
const totalImageNumber = document.getElementById("total-image-number");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
// the image array
const images = [
    "/img/post_images/living-room-couch.jpg",
    "/img/post_images/modern-kitchen.jpg",
    "/img/post_images/bohemian-bedroom.jpg"];

// the index of the image on page load
let currentImage = 0;
// the image details that shows when the webpage loads
window.addEventListener("DOMContentLoaded", function () {
    image.src = images[currentImage];
    imageNumber.textContent = currentImage + 1;
    totalImageNumber.textContent = images.length;
});
// function to select and change the image details
function showImage() {
    image.src = images[currentImage];
    imageNumber.textContent = currentImage + 1;
    totalImageNumber.textContent = images.length;
};

// the next button function
nextBtn.addEventListener("click", next);
function next() {
    currentImage++;
    if (currentImage > images.length - 1) {
        currentImage = 0;
    }
    showImage(currentImage);
}

// the prev button function
prevBtn.addEventListener("click", prev);
function prev() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    showImage(currentImage);
};

// ! ratings star
// varibles
// let ratingNumber = document.querySelector(".rating-number");
// const star1 = document.querySelector(".rstar1");
// const star2 = document.querySelector(".rstar2");
// const star3 = document.querySelector(".rstar3");
// const star4 = document.querySelector(".rstar4");
// const star5 = document.querySelector(".rstar5");

// star1.addEventListener('click', function () {
//     if (star1.style.color == "var(--main-color6-inactive)") {
//         star1.style.color = "#107bff"
//         ratingNumber.innerHTML = "1";
//     }
//     else {
//         star1.style.color = "var(--main-color6-inactive)"
//         ratingNumber.innerHTML = "0";
//     }
//     // star1.classList.toggle("star-toggle");
// });
// star2.addEventListener('click', function () {
//     if (star2.style.color == "var(--main-color6-inactive)") {
//         star2.style.color = "#107bff"
//         ratingNumber.innerHTML = "2";
//     }
//     else {
//         star2.style.color = "var(--main-color6-inactive)"
//         ratingNumber.innerHTML = initial;
//     }
// });

// for (i of ratingNumber) {
//     i.textContent = "s";
//     i.style.color = "red";
// }

// for (var p = 0; p < ratingNumber.length; p++) {
//     ratingNumber[p].textContent = "p";
//     ratingNumber[p].innerHTML = "g";
// }

// for (i of star1) {
//     i.addEventListener('click', function () {
//         if (this.style.color == "var(--main-color6-inactive)") {
//             this.style.color = "#107bff";
//             ratingNumber[i].innerHTML = "1";
//         }
//         else {
//             this.style.color = "var(--main-color6-inactive)";
//         };
//     });
// }