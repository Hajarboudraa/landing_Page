let containerImg = document.querySelector(".goldcon");
let menu = document.querySelectorAll(".menu img");
// for (let i = 0; i < menu.length; i++) {
//     menu[i].addEventListener("click", function() {
//         document.body.style.backgroundColor = `${menu[i].className}`;
//         containerImg.src = menu[i].src;
//         console.log(`"${menu[i].className}"`)
//     })
// }
if (window.localStorage.getItem("backgroundg") && window.localStorage.getItem("imgs")) { //if this color in localstorage
    document.body.style.backgroundColor = window.localStorage.getItem("backgroundg");
    containerImg.src = window.localStorage.getItem("imgs");
    menu.forEach((img) => {
        img.classList.remove("active");
    });
    document.querySelector(`[data-color="${window.localStorage.getItem("backgroundg")}"]`).classList.add("active");
} else {
    console.log("no");
}
for (let i = 0; i < menu.length; i++) {

    menu[i].addEventListener("click", function(e) {

        window.localStorage.setItem("backgroundg", e.currentTarget.dataset.color);
        window.localStorage.setItem("imgs", e.currentTarget.src);

        menu[i].classList.remove("active");
        document.body.style.backgroundColor = e.currentTarget.dataset.color;
        containerImg.src = e.currentTarget.src;

    });
}