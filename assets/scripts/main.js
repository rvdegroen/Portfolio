// Listen for the hashchange event
window.addEventListener("hashchange", function () {
	// Get the hash value from the URL
	const hash = window.location.hash;
	// Check if the hash value corresponds to a section on the page
	if (document.querySelector(hash)) {
		// Scroll to the section with the matching ID
		document.querySelector(hash).scrollIntoView();
	}
});

// add acrylic class to navbar once the user starts scrolling
window.addEventListener("scroll", function () {
	const nav = document.querySelector("nav");
	const scrollPosition = window.scrollY;
	// tenory operator:
	scrollPosition > 100 ? nav.classList.add("acrylic") : nav.classList.remove("acrylic");
	// if else:
	// if (scrollPosition > 100) {
	// 	console.log("nooo");
	// 	nav.classList.add("acrylic");
	// } else {
	// 	nav.classList.remove("acrylic");
	// }
});

function darkmode() {
	const input = document.getElementById("darkmode");
}
