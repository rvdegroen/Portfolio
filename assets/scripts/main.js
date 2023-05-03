// variables
const checkbox = document.getElementById("darkmode");
const body = document.body;

// lightmode is default mode
body.classList.add("lightmode");

// listen for the hashchange event
window.addEventListener("hashchange", function () {
	// get the hash value from the URL
	const hash = window.location.hash;
	// check if the hash value corresponds to a section on the page
	if (document.querySelector(hash)) {
		// scroll to the section with the matching ID
		const target = document.querySelector(hash);
		target.scrollIntoView();
	}
});

// add acrylic class to navbar once the user starts scrolling
window.addEventListener("scroll", function () {
	const nav = document.querySelector("nav");
	const scrollPosition = window.scrollY;
	// tenory operator:
	scrollPosition > 100 ? nav.classList.add("acrylic") : nav.classList.remove("acrylic");
});

// darkmode and lightmode
checkbox.addEventListener("change", function () {
	if (this.checked) {
		body.classList.add("darkmode");
		body.classList.remove("lightmode");
	} else {
		body.classList.remove("darkmode");
		body.classList.add("lightmode");
	}
});
