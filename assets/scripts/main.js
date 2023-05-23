//// VARIABLES
const checkbox = document.getElementById('darkmode');
const body = document.body;

// dialog
const gridImages = document.querySelectorAll('.grid_image');
const dialog = document.getElementById('dialog');
const dialogImage = document.getElementById('dialog_image');

// DEFAULT MODES
body.classList.add('lightmode');

//// FUNCTIONS
// go back button
function goBack() {
	if (window.history.length > 1) {
		window.history.back();
	} else {
		window.scrollTo(0, sessionStorage.getItem('scrollPosition'));
	}
}

// EVENTLISTENERS
// to click on the images
// Function to open the dialog and show the clicked image
function openDialog(imageSrc) {
	dialogImage.src = imageSrc;
	dialog.style.display = 'block';
}

// Function to close the dialog
function closeDialog() {
	dialog.style.display = 'none';
}

// attach click event listeners to the grid images
gridImages.forEach((image) => {
	image.addEventListener('click', function () {
		const src = this.getAttribute('src');
		openDialog(src);
	});
});

// attach click event listener to the dialog to close it when clicked outside
dialog.addEventListener('click', function (event) {
	if (event.target === this) {
		closeDialog();
	}
});

// attach esc event listener to the document
document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		closeDialog();
	}
});

// go back
window.addEventListener('beforeunload', function () {
	sessionStorage.setItem('scrollPosition', window.pageYOffset);
});

// listen for the hashchange event
window.addEventListener('hashchange', function () {
	// get the hash value from the URL
	const hash = window.location.hash;
	// check if the hash value corresponds to a section on the page
	if (document.querySelector(hash)) {
		// scroll to the section with the matching ID
		const target = document.querySelector(hash);
		target.scrollIntoView();
	}
});

// resize img
window.addEventListener('load', function () {
	const imgGrid = document.querySelector('.image_grid');
	var images = imageContainer.querySelectorAll('.grid_image');

	for (let i = 0; i < images.length; i++) {
		let image = images[i];

		if (image.naturalWidth > imageContainer.offsetWidth) {
			image.style.width = '100%';
		}
	}
});

// darkmode and lightmode
checkbox.addEventListener('change', function () {
	if (this.checked) {
		body.classList.add('darkmode');
		body.classList.remove('lightmode');
	} else {
		body.classList.remove('darkmode');
		body.classList.add('lightmode');
	}
});
