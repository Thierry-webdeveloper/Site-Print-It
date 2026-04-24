// ── Données ──────────────────────────────────────
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0

// ── Fonctions ─────────────────────────────────────
// --- Modifier le slide au clic sur les flèches ---
function updateSlide(index) {
  const bannerImg = document.querySelector(".banner-img")
  const bannerText = document.querySelector("#banner p")
  const allDots = document.querySelectorAll(".dot")

  bannerImg.src = "./assets/images/slideshow/" + slides[index].image	// mettre à jour l'image
  bannerText.innerHTML = slides[index].tagLine							// mettre à jour le texte
  																		// mettre à jour le dot actif
  allDots[currentSlide].classList.remove("dot_selected") 					// -> ancien
  allDots[index].classList.add("dot_selected")           					// -> nouveau
}

// --- Gestion du clic sur les flèches gauche et droite ---
function handleClick(increment) {
	let newIndex = currentSlide + increment
	if (newIndex < 0) {
		//console.log(slides.length)
		newIndex = slides.length - 1
	} else if (newIndex >= slides.length) {
		newIndex = 0
	}
	updateSlide(newIndex)
	currentSlide = newIndex
	if (increment === -1) {
		console.log("clic gauche")
//		alert("Page précédente")			// bloque la page
	} else {
		console.log("clic droit")
//		alert("Page suivante")
	}
}

// ── Récupération des éléments ─────────────────────
const arrowLeft  = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const dotsContainer = document.querySelector(".dots")

// ── Event listeners ───────────────────────────────
arrowLeft.addEventListener("click", function() {
    handleClick(-1)
})

arrowRight.addEventListener("click", function() {
    handleClick(1)
})

// fonction anonyme
//arrowLeft.addEventListener("click", function() {
//    console.log("clic gauche")
//})

// ── Générer les dots dynamiquement ───────────────────
for (let i = 0; i < slides.length ; i++) {
  const dot = document.createElement("div")
  dot.classList.add("dot")
  if (i === 0) {
    dot.classList.add("dot_selected")
  }
  dotsContainer.appendChild(dot)
}