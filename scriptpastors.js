let image = [
    "images/FB_IMG_1604304554429.jpg",
    "images/FB_IMG_1633071606091.jpg",
    "images/FB_IMG_1604304777680.jpg",
    "images/IMG-20221023-WA0004.jpg"
];

let pstpics = document.getElementById("pst-pics");

setInterval( () => {
    let random = Math.floor(Math.random() * 4);
    pstpics.src = image[random]
}, 7000);