const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('.nav')

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navigation.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(e => e.addEventListener("click", () => {
    // hamburger.classList.remove("active")
    // navigation.classList.remove("active")
  })
)

let images = [
    "images/IMG-20221023-WA0001.jpg",
    "images/IMG_8455.jpeg",
    "images/IMG_20221218_102723_939.jpg",
    "images/IMG20210321094742.jpg",
    "images/IMG_8546.JPEG"
];
 
let num = 0;

function prev() {
    let slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

function next() {
    let slider = document.getElementById("slider");
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

setInterval(function() {
    let random = Math.floor(Math.random() * 5);
    slider.src = images[random]
}, 10000);

const navl = document.querySelectorAll(".mo");
        navl.forEach((navl) => {
            navl.addEventListener("click", () => {
                navl.classList.toggle("active");
            });
        });