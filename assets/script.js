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

// --- Fonctions ---
function gererClic(increment) {
	if (increment === -1) {
		console.log("clic gauche")
//		alert("Page précédente")			// bloque la page
	} else {
		console.log("clic droit")
//		alert("Page suivante")
	}
}

// Ajout des Event Listeners sur les flèches (étape 2)
// --- Récupération des éléments ---
const arrowLeft  = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")

// --- Event listeners ---
arrowLeft.addEventListener("click", function() {
    gererClic(-1)
})

arrowRight.addEventListener("click", function() {
    gererClic(1)
})

// fonction anonyme
//arrowLeft.addEventListener("click", function() {
//    console.log("clic gauche")
//})

// Générer les bullet points dynamiquement (étape 3)
// Récupération des éléments
const dotsContainer = document.querySelector(".dots")

// Génération des dots
for (let i = 0; i < slides.length ; i++) {
  const dot = document.createElement("div")
  dot.classList.add("dot")
  if (i === 0) {
    dot.classList.add("dot_selected")
  }
  dotsContainer.appendChild(dot)
}