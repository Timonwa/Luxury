// ! filter form varibles
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
// ! the like button
// var likeButtons = document.querySelectorAll("div.save-btn");
// for (i = 0; i < likeButtons.length; i++) {
//     likeButtons[i].style.color = "green";
//     likeButtons[i].onclick = function () {
//         likeToggle();
//     };
// }
// function likeToggle() {
//     if (likeButtons[i].style.color === "red") {
//         likeButtons[i].style.color = "black";
//     }
//     else {
//         likeButtons[i].style.color = "red";
//     }
// }


