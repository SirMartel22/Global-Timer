// get dom element
const backgroundInput = document.getElementById('backgroundInput');
const fileNameDisplay = document.getElementById('fileName');


// default gradient backgroundInput
const defaultBackground = 'linear-gradient(45deg, #ff6b6b, $4ecdc4)'

// listen for file selection
backgroundInput.addEventListener('change', function(event){
	const file = event.target.files[0];

	// check if a file was selected
	if (file) {
		// display selected file name

		fileNameDisplay.textContent = `selected: ${file.name}`;

		// create file reader to read the image
		const reader = new FileReader();

		reader.onload = function(e){
			// set the background image when file is loaded
			document.body.style.background = `url('${e.target.result}')`
			document.body.style.backgroundSize = 'cover';
			document.body.style.bakcgroundPosition = 'center';
			document.body.style.backgroundRepeat = 'no-repeat';
		};

		// read the image file
		reader.readAsDataURL(file);
		console.log(backgroundInput.value);
	}
});


//Function to reset background to default gradient
function resetBackground(){
	console.log("working")
	document.body.style.background = defaultBackground;

	// // clear the file input and filename display
	backgroundInput.value = '';
	fileNameDisplay.textContent = '';
	console.log(backgroundInput.value)
}