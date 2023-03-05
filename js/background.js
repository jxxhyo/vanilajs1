const images=[
    "Autumn.jpg",
    "PC.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image=document.querySelector("body");

const bgImage = document.createElement("img");

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);