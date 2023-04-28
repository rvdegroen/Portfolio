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
