const imeges = [
	"0.jpeg",
	"1.jpeg",
	"2.jpeg"
]

const chosenImage = imeges[Math.floor(Math.random() * imeges.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);